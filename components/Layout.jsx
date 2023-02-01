import React from "react";
import Navbar from "./Navbar";
import Taskbar from "./Taskbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Taskbar/>
    </>
  );
};

export default Layout;
