import axios from 'axios';
import cookie from 'cookie';

export const API_URL = process.env.API_URL;
export const STRAPI_URL = process.env.STRAPI_URL;

async function checkUser(req, res) {
  if (req.method == 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized' });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);

    axios
      .get(`${STRAPI_URL}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((strapiRes) => {
        if (strapiRes.status == 200) {
          res.status(200).send({ user: strapiRes.data });
        } else {
          res.status(403).json({ message: 'User forbidden' });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(403).json({ message: 'User forbidden' });
      });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}

export default checkUser;
