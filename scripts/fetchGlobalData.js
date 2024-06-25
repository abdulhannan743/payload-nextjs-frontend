const { default: axios } = require("axios");
const fs = require("fs").promises;
require("dotenv").config();
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

async function fetchData(endpoint) {
  try {
    const response = await axios(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
}

async function writeToFile(filePath, data) {
  try {
    const jsonValue = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath, jsonValue);
  } catch (error) {
    console.error(`Error writing data to ${filePath}:`, error);
    throw error;
  }
}

async function fetchGlobalData() {
  try {
    console.log("Running Initial Fetch");

    const endpoints = {
      header: "/api/globals/header",
      footer: "/api/globals/footer",
    };

    const globalData = await Promise.all(
      Object.keys(endpoints).map(async (key) => {
        const data = await fetchData(endpoints[key]);
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
