import React from "react";
import { ReactComponent as MyIcon } from "../../assets/roadmap.svg";
import "./TopNav.scss";

export const TopNav = () => {
  return (
    <>
      <nav className="topnav">
        <ul className="topnav-link">
          <li className="topnav-link-item">
            <MyIcon fill="white" />
          </li>
          <li className="topnav-link-item"> Roadmaps </li>
          <li className="topnav-link-item"> Best Practices</li>
          <li className="topnav-link-item"> Guidance</li>
        </ul>
      </nav>
    </>
  );
};
