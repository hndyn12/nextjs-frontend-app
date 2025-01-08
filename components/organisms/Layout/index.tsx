import React from "react";
import Nav from "../Nav";
import Sidebar from "../Sidebar";

interface LayoutProbs {
  childern: React.ReactNode;
}
export default function Layout({ childern }: LayoutProbs) {
  return (
    <>
      <div className="sb-nav-fixed">
        <Nav />
        <div id="layoutSidenav">
          <Sidebar />
          <div id="layoutSidenav_content">
            <main>{childern}</main>
          </div>
        </div>
      </div>
    </>
  );
}
