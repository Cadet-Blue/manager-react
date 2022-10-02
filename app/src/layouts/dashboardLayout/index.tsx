import React from "react";
import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

interface DashboardLayoutProps {
  children?: ReactNode;
}

const useAuth = () => {
  let user: any;

  const _user = localStorage.getItem("user");

  if (_user) {
    user = JSON.parse(_user);
    console.log("user", user);
  }
  if (user) {
    return {
      auth: true,
    };
  } else {
    return {
      auth: false,
    };
  }
};

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { auth } = useAuth();
  return auth ? (
    <>
      <h1>Dashboard Layout</h1>
      {children || <Outlet />}
    </>
  ) : (
    <Navigate to="/auth" />
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
