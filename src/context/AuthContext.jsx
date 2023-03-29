import { createContext, useContext, useEffect, useState } from 'react';
import * as userSer from '../services/user-services';
import * as auth from '../services/auth-services';
import { tokenKey } from '../config';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [statusError, setErrorLogin] = useState({
    loginError: {},
    signupError: {},
    updateError: {},
  });

  useEffect(() => {
    userSer
      .getUser()
      .then((u) => setUser(u))
      .catch(console.log);
  }, []);

  function login(credentials) {
    auth
      .login(credentials)
      .then((u) => setUser(u))
      .catch((error) =>
        setErrorLogin({
          ...statusError,
          loginError: error,
        })
      );
  }

  function logout() {
    auth
      .logout()
      .then(() => {
        sessionStorage.removeItem(tokenKey);
        setUser(null);
      })
      .catch(console.log);
  }

  function signUp(userData) {
    userSer
      .createUser(userData)
      .then((u) => setUser(u))
      .catch((error) =>
        setErrorLogin({
          ...statusError,
          signupError: error,
        })
      );
  }

  function upDate(userData) {
    userSer
      .upDateUser(userData)
      .then((u) => setUser(u))
      .catch((error) =>
        setErrorLogin({
          ...statusError,
          update: JSON.stringify(error),
        })
      );
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, signUp, upDate, statusError }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth, AuthProvider };
