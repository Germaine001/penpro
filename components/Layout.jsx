import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Taskbar from "./Taskbar";

const Layout = ({ children }) => {
  return (
    <>
    <Head>
      <title>Penpro || Read Write</title>
    </Head>
      <Navbar />
      {children}
      <Taskbar/>
    </>
  );
};

export default Layout;
