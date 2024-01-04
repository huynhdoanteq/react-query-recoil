import axios, { type AxiosError } from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

const baseHeaders = (config: AxiosRequestConfig) => ({
  "Content-Type": "application/json",
  ...config.headers,
});

export interface ResData<T = string> {
  code: number;
  data: T;
  message: string;
}

export interface ErrorData<T = string> extends ResData<T> {
  status: number;
  statusText: string;
}

export interface MappedResponse<T = string> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  data?: T;
  error?: AxiosError<ResData<T>> | ErrorData<T>;
}

// Config App Axios
const AxiosClient = axios.create();
AxiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_URL_DEV;

const AxiosAuth = axios.create();
AxiosAuth.defaults.baseURL = process.env.NEXT_PUBLIC_URL_DEV;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
AxiosClient.interceptors.request.use((config: AxiosRequestConfig): any => {
  return {
    ...config,
    headers: {
      ...baseHeaders(config),
      Authorization: `Bearer ${getLocalStorageToken().accessToken}`,
    },
  };
});

const setHeaderAppAxios = (token?: string): void => {
  if (!token) {
    if (localStorage.getItem("CHECK_LOGIN")) {
      AxiosClient.defaults.headers.common = {
        Authorization: `Bearer ${getLocalStorageToken().accessToken}`,
      };
    }
    return;
  } else {
    AxiosClient.defaults.headers.common = {
      Authorization: `Bearer ${getLocalStorageToken().accessToken}`,
    };
  }
};

export async function requestHandler<T = string>(
  callApi: () => Promise<AxiosResponse<T>>
): Promise<MappedResponse<T>> {
  try {
    const { data }: AxiosResponse<T> = await callApi();
    return { data };
  } catch (e: unknown) {
    const mayAxiosError = e as AxiosError<ResData<T>>;
    if (
      mayAxiosError &&
      mayAxiosError.response &&
      mayAxiosError.response.data
    ) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw {
        ...mayAxiosError.response.data,
        status: mayAxiosError.response.status,
        statusText: mayAxiosError.response.statusText,
      };
    }
    return { error: mayAxiosError };
  }
}

export { AxiosClient, AxiosAuth, setHeaderAppAxios };
