import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const API_URL = process.env.API_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      //make api for current user
      axios
        .get(`http://localhost:3000/api/user`)
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data.user);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
