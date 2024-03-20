//api class
import axios from 'axios';
//import env variable API_URL
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
class Api {
  constructor(strapiUrl = STRAPI_URL, apiUrl = API_URL) {
    this.strapiUrl = strapiUrl;
    this.apiUrl = apiUrl;
  }

  _getResponseData = (res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  };

  postUser = (user) => {
    return axios
      .post(`${this.strapiUrl}/api/auth/local/register`, user)
      .then((res) => {
        console.log(res);
        return res;
      });
  };

  loginUser = (user) => {
    return axios
      .post(`${this.apiUrl}/login`, user)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  getUserInfo = () => {
    return axios.get(`${this.apiUrl}/user/`).then((res) => {
      return res;
    });
  };

  postApplication = (application) => {
    return fetch(`${this.strapiUrl}/api/applications`, {
      method: 'POST',
      body: application,
      //no need for headers because we are sending a form data object
    });
  };

  postContactEntry = (contactEntry) => {
    return fetch(`${this.strapiUrl}/api/contacts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactEntry),
    })
      .then(this._getResponseData)
      .then((data) => data)
      .catch((err) => {
        console.log('there was an error submitting contact form');
        console.log(err);
        return 400;
      });
  };

  getApplication = (username) => {
    return axios.post(`${this.apiUrl}/application`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
  };
}

// const BASE_URL = 'https://khs-strapi-deploy.onrender.com';

export const api = new Api();
