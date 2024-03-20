import axios from 'axios';
import cookie from 'cookie';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function checkApplication(req, res) {
  console.log('check application');
  console.log(req.method);

  if (req.method == 'POST') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized' });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);

    if (token) {
      axios
        .get(`${STRAPI_URL}/api/applications?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((strapiRes) => {
          if (strapiRes.status == 200) {
            console.log(strapiRes.data.data);
            const arr = strapiRes.data.data;
            const myApp = arr.filter((app) => {
              const appUser =
                app.attributes.users_permissions_user.data.attributes.username;
              const reqUser = JSON.parse(req.body.body).username;
              return appUser == reqUser;
            })[0];

            console.log('MYAPP');
            console.log(myApp);

            res.status(200).send({ application: myApp });
          } else {
            res.status(403).json({ message: 'User forbidden 1' });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(403).json({ message: 'User forbidden 2' });
        });
    } else {
      res.status(403).json({ message: 'unauthorized' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}

export default checkApplication;
