import axios from "axios"

interface RequestOptions {
  method: string;
  headers?: any;
  bady?: any;
}

export const axiosRequest = async (requestUrl: string, requestOptions: RequestOptions) => {
  try {
    return await axios(requestUrl, requestOptions)
  } catch (error: any) {
    return error.response.data
  }
}

