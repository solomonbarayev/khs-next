//api class
import axios from 'axios';
//import env variable API_URL
const API_URL = process.env.NEXT_PUBLIC_API_URL;
class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  _getResponseData = (res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  };

  postUser = (user) => {
    return axios
      .post(`${this.baseUrl}/api/auth/local/register`, user)
      .then((res) => {
        console.log(res);
        return res;
      });
  };

  loginUser = (user) => {
    return axios.post(`${API_URL}/login`, user).then((res) => {
      return res;
    });
  };

  postApplication = (application) => {
    return fetch(`${this.baseUrl}/api/applications`, {
      method: 'POST',
      body: application,
      //no need for headers because we are sending a form data object
    });
  };

  postContactEntry = (contactEntry) => {
    return fetch(`${this.baseUrl}/api/contacts`, {
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

  getApplications = (jwt) => {
    return axios(`${this.baseUrl}/api/applications?populate=*`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  };
}

const BASE_URL = 'https://khs-strapi-deploy.onrender.com';

export const api = new Api(BASE_URL);
