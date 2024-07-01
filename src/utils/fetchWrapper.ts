import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
/**
 * @function handleResponse
 * @param {Object} response - The response object.
 * @description
 *   A handler for the axios response Object
 * @return {Promise<T>} A promise containing the deserialized response body.
 */
export async function handleResponse<TData>(
  response: AxiosResponse
): Promise<TData> {
  if (response.status === 204) {
    return {} as TData;
  }
  if (response.status < 200 || response.status >= 300) {
    throw new Error(
      `There has been an error. Response status: ${response.status}`
    );
  }
  return response.data as TData;
}

/**
 * Axios wrapper function for making API calls.
 * @param {Object} config - Configuration object for the request.
 * @returns {Promise<TData>} - A promise containing the response data.
 */
export async function fetchWrapper<TData, TBody = unknown>({
  method = "GET",
  url,
  body,
  additionalHeaders,
  ...additionalOptions
}: {
  url: string;
  method?: string;
  body?: TBody;
  additionalHeaders?: Record<string, string>;
  additionalOptions?: AxiosRequestConfig;
}): Promise<TData> {
  const API_BASEURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const _url = `${API_BASEURL}${url}`;
  const options: AxiosRequestConfig = {
    method: method,
    url: _url,
    headers: {
      "Accept": additionalHeaders?.Accept || "application/json",
      "Content-Type": additionalHeaders?.["Content-Type"] || "application/json",
      ...additionalHeaders,
    },
    withCredentials: true,
    data: body,
    ...additionalOptions,
  };

  const response = await axios(options);
  return await handleResponse<TData>(response);
}
