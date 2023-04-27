//api class

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
    return fetch(`${this.baseUrl}/api/auth/local/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(this._getResponseData);
  };

  loginUser = (user) => {
    return fetch(`${this.baseUrl}/api/auth/local`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(this._getResponseData)
      .then((data) => {
        //save jwt to local storage
        localStorage.setItem('jwt', data.jwt);
        return data;
      })
      .catch((err) => {
        console.log('there was an error logging in user');
        console.log(err);
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
}

const BASE_URL = 'http://localhost:1337';

export const api = new Api(BASE_URL);
