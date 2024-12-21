// src/components/PrivateRoute.js
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("isAuth", isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
