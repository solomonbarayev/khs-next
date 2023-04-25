//api class

import axios from 'axios';

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
    return fetch(`${this.baseUrl}api/auth/local/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(this._getResponseData);
  };

  postApplication = (application) => {
    return fetch(`${this.baseUrl}api/applications`, {
      method: 'POST',
      body: application,
      //no need for headers because we are sending a form data object
    });
  };
}

const BASE_URL = 'http://localhost:1337/';

export const api = new Api(BASE_URL);
