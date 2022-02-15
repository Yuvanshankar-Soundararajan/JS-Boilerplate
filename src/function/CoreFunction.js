import { AxiosRequestConfig } from "axios";
import React from "react";
import API from "../consts/API";

export const GetMethodFetcher = async (url) => {
  const config = {
    method: "GET",
    url: url,
  };
  return await API(config).then((response) => response.data);
};
