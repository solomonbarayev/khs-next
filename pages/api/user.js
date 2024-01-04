import axios from 'axios';
import cookie from 'cookie';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function checkUser(req, res) {
  return new Promise((resolve, reject) => {
    if (req.method == 'GET') {
      if (!req.headers.cookie) {
        res.status(403).json({ message: 'Not authorized' });
        return;
      }

      const { token } = cookie.parse(req.headers.cookie);

      const url = `${STRAPI_URL}/api/users/me?populate=role`;

      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((strapiRes) => {
          console.log('IN CHECK USER');
          if (strapiRes.status == 200) {
            console.log(strapiRes.data);
            res.status(200).send({ user: strapiRes.data });
          } else {
            res.status(403).json({ message: 'User forbidden' });
          }
          resolve();
        })
        .catch((err) => {
          console.log(err);
          res.status(403).json({ message: 'User forbidden' });
          resolve();
        });
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
      reject();
    }
  });
}

export default checkUser;
