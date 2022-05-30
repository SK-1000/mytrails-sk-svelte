import axios from "axios";
import {user} from "../stores";

export class TrailService {
  baseUrl = "https://ancient-earth-27621.herokuapp.com/";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    const trailCredentials = localStorage.trail;
    if (trailCredentials) {
      const savedUser = JSON.parse(trailCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
        });
        localStorage.trail = JSON.stringify({email: email, token: response.data.token});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("trail");
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async addtrail(trail) {
    try {
      const response = await axios.post(this.baseUrl + "/api/traillists/" + trail.traillist + "/trails", trail);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  async getTraillists() {
    try {
      const response = await axios.get(this.baseUrl + "/api/traillists");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getTrails() {
    try {
      const response = await axios.get(this.baseUrl + "/api/trails");
      return response.data;
    } catch (error) {
      return [];
    }
  }
}
