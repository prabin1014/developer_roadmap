import React from "react";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="roadmap">
      <div className="roadmap-introduction">
        <h1 className="roadmap-title"> Developer Roadmaps </h1>
        <p className="roadmap-description">
          Many developers often have their ambition set but unable to find the
          correct roadmap to achieve those aims and goals. So, this is a small
          effort to guide them a path with overall contents.
        </p>
      </div>

      <section className="roadmap-content">
        <div className="line"></div>
        <div className="roadmap-content-title">Role Based Roadmaps</div>
        <div className="line"></div>
      </section>

      <section className="roadmap-field">
        <ul className="roadmap-field-list">
          <li className="roadmap-field-list-span">
            <span> Frontend </span>
          </li>
          <li className="roadmap-field-list-span">
            <span> Backend</span>
          </li>
          <li className="roadmap-field-list-span">
            <span> Database </span>
          </li>
          <li className="roadmap-field-list-span">
            <span> UI/UX Design </span>
          </li>
          <li className="roadmap-field-list-span">
            <span> Cyber Security </span>
          </li>
          <li className="roadmap-field-list-span">
            <span> Presentation </span>
          </li>
        </ul>
      </section>
    </div>
  );
};
