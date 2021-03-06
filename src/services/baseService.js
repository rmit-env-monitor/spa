import axios from "axios";
import * as constants from "../utilities/constants";

axios.defaults.baseURL = constants.BASE_URL;
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Content-Type"] = "application/json; charset=utf-8";

export default function baseService(method, link, data) {
  const token = localStorage.token || "";
  const authorizationHeader = `Bearer ${token}`;

  if (method == constants.GET_METHOD) {
    return axios({
      method: method,
      url: link,
      headers: { Authorization: authorizationHeader }
    });
  }

  return axios({
    method: method,
    url: link,
    data: data,
    headers: { Authorization: authorizationHeader }
  });
}
