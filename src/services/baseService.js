import axios from "axios";
import * as constants from "../utilities/constants";

axios.defaults.baseURL = constants.BASE_URL;
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Content-Type"] = "application/json; charset=utf-8";

export default function baseService(method, link, data) {
  const token = localStorage.token || localStorage.google_id_token || "";
  let authorizationHeader = "";
  if (localStorage.token) {
    authorizationHeader = `Bearer ${token}`;
  } else if (localStorage.google_id_token) {
    authorizationHeader = `Google ${token}`;
  } else {
    authorizationHeader = `Bearer  `;
  }

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
