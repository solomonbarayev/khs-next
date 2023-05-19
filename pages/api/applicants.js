import axios from 'axios';
import cookie from 'cookie';

export const API_URL = process.env.API_URL;
export const STRAPI_URL = process.env.STRAPI_URL;

async function checkUser(req, res) {
  console.log('check user');

  if (req.method == 'GET') {
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
            console.log(strapiRes.data);
            res.status(200).send({ applicants: strapiRes.data });
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
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}

export default checkUser;
