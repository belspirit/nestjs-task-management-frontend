import Axios from "axios";
import BaseHttpService from "./base-http.service";

export default class AuthService extends BaseHttpService {
  async signin(username, password) {
    const result = await Axios.post(`${this.BASE_URL}/auth/signin`, {
      username,
      password,
    });
    const accessToken = result.data.accessToken;
    this.saveToken(accessToken);
    return result.data.username;
  }

  async signup(username, password) {
    await Axios.post(`${this.BASE_URL}/auth/signup`, { username, password });
  }

  async signout() {
    this.removeToken();
  }
}
