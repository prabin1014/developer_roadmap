import React from "react";
import "./TopNav.scss";

export const TopNav = () => {
  console.log("hello");
  return (
    <>
      <nav className="topnav">
        <ul className="topnav-link">
          <li className="topnav-link-item"> Roadmaps </li>
          <li className="topnav-link-item"> Best Practices</li>
          <li className="topnav-link-item"> Guidance</li>
        </ul>
      </nav>
    </>
  );
};
