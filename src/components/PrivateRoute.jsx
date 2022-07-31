import React from 'react';
import Loader from './Loader';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from './../hooks/useAuthStatus';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return (
      <div className="my-6 text-center">
        <Loader />
      </div>
    );
  }

  return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
