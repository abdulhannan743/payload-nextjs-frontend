import axios, { AxiosResponse } from "axios";
import { promises as fs } from "fs";
import { config } from "dotenv";
import { loadEnvConfig } from "@next/env";

config();
loadEnvConfig(process.cwd());

interface EndpointData {
  [key: string]: string;
}

const endpoints: EndpointData = {
  header: "/api/globals/header",
  footer: "/api/globals/footer",
};

async function fetchData<T>(endpoint: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
}

async function writeToFile(filePath: string, data: unknown): Promise<void> {
  try {
    const jsonValue = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath, jsonValue);
  } catch (error) {
    console.error(`Error writing data to ${filePath}:`, error);
    throw error;
  }
}

interface GlobalData {
  key: string;
  data: unknown;
}

async function fetchGlobalData(): Promise<void> {
  try {
    console.log("Running Initial Fetch");

    const globalData: GlobalData[] = await Promise.all(
      Object.keys(endpoints).map(async (key) => {
        const data = await fetchData<unknown>(endpoints[key]);
        return { key, data };
      })
    );

    await Promise.all(
      globalData.map(({ key, data }) => {
        if (data) {
          return writeToFile(`src/globalData/${key}.json`, data);
        }
        return null;
      })
    );

    console.log("Global data fetched and written successfully.");
  } catch (error) {
    console.error("Error fetching global data:", error);
    process.exit(1);
  }
}

fetchGlobalData();
