/*
 * @Description:
 * @Date: 2022/12/04 11:11:57
 * @LastEditTime: 2022/12/04 11:58:01
 */
import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

const axiosConfig = {
  baseURL: BASE_URL,
  timeout: TIMEOUT,
};

class $Request {
  static Instance(axiosConfig) {
    return this._instance || new $Request(axiosConfig);
  }

  constructor(axiosConfig) {
    this._instance = axios.create(axiosConfig);

    this._instance.interceptors.request.use((config) => config);

    this._instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (err) => err
    );
  }

  _request(config) {
    return this._instance.request(config);
  }

  get(config) {
    return this._request({ ...config, method: "get" });
  }

  post(config) {
    return this._request({ ...config, method: "post" });
  }
}

export default $Request.Instance(axiosConfig);
