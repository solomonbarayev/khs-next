import axios from 'axios';
import cookie from 'cookie';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function login(req, res) {
  return new Promise((resolve, reject) => {
    if (req.method == 'POST') {
      axios
        .post(`${STRAPI_URL}/api/auth/local`, req.body)
        .then((strapiRes) => {
          if (strapiRes.status == 200) {
            //set cookie  - todo
            res.setHeader(
              'Set-Cookie',
              cookie.serialize('token', strapiRes.data.jwt, {
                httpOnly: process.env.NODE_ENV !== 'development',
                secure: process.env.NODE_ENV !== 'development',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                sameSite: 'strict',
                path: '/',
              })
            );
            res.status(200).send({ user: strapiRes.data.user });
          } else {
            res.status(strapiRes.status).send({ message: 'Error logging in' });
          }
          resolve();
        })
        .catch((err) => {
          console.log(err);
          res
            .status(err.response.status)
            .send({ message: err.response.data.error.message });
          resolve();
        });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
      reject();
    }
  });
}

export default login;
