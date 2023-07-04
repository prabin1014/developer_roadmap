import React from "react";
import { ReactComponent as MyIcon } from "../../assets/roadmap.svg";
import { NavLink } from "react-router-dom";
import "./TopNav.scss";

export const TopNav = () => {
  return (
    <>
      <nav className="topnav">
        <ul className="topnav-link">
          <NavLink to="/">
            <li className="topnav-link-item">
              <MyIcon fill="white" />
            </li>
          </NavLink>
          <li className="topnav-link-item"> Roadmaps </li>
          <li className="topnav-link-item"> Best Practices</li>
          <li className="topnav-link-item"> Guidance</li>
        </ul>
      </nav>
    </>
  );
};
