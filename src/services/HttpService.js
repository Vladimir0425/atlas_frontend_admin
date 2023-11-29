import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.128.59:3003",
});

export class HttpService {
  static async get(url, params = {}) {
    return await http.get(url, { params });
  }

  static async post(url, body, config = {}) {
    return await http.post(url, body, config);
  }

  static async put(url, body, config = {}) {
    return await http.put(url, body, config);
  }
}
