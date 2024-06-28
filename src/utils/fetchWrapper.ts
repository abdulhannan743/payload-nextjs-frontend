/**
 * @function handleResponse
 * @param {Object} response - The response object.
 * @description
 *   A handler for the fetch response Object
 * @return {Promise<T>} A promise containing the deserialized response body.
 * */
export async function handleResponse<TData>(
  response: Response
): Promise<TData> {
  if (response.status === 204) {
    return {} as TData;
  }

  const res = await response.json();

  if (response.status < 200 || response.status >= 300) {
    throw new Error(
      `There has been an error. Response status: ${response.status}`
    );
  }

  return res;
}

export async function fetchWrapper<TData, TBody = unknown>({
  method = "GET",
  url,
  body,
  token,
  additionalHeaders,
  ...additionalOptions
}: {
  url: string;
  method?: string;
  body?: TBody;
  token?: string;
  additionalHeaders?: {
    Accept: string;
    "Content-Type": string;
  };
  additionalOptions?: any;
}): Promise<TData> {
  const API_BASEURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const _url = `${API_BASEURL}${url}`;
  const options = {
    method: method,
    headers: {
      Accept: additionalHeaders?.Accept || "application/vnd.api+json ",
      "Content-Type":
        additionalHeaders?.["Content-Type"] || "application/vnd.api+json",
    },
    credentials: "include" as RequestCredentials,
    body: body && JSON.stringify(body), // body can be undefined, that's ok
    ...additionalOptions,
  };

  const response = await fetch(_url, options);
  return await handleResponse<TData>(response);
}

// import axios from "axios";

// export async function fetchWrapper(url: string) {
//   try {
//     const response = await axios.get(`${url}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching header data:", error);
//     throw error;
//   }
// }
