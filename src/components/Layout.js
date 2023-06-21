import React from "react";
import { TopNav } from "./TopNav/TopNav";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
};
