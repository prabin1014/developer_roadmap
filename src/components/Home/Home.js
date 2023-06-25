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

      {/* List of Roadmap for the different fields begins from here */}
      {/* Header part */}

      <section className="roadmap-content">
        <div className="line"></div>
        <div className="roadmap-content-title">Role Based Roadmaps</div>
        <div className="line"></div>
      </section>

      {/* List part made using grid */}

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

      {/* Another list of skills roadmap begins from here */}
      {/* Header part */}
      <section className="roadmap-content">
        <div className="line"></div>
        <div className="roadmap-content-title">Role Based Roadmaps</div>
        <div className="line"></div>
      </section>

      {/* List part made uing grid */}
      <section className="roadmap-field">
        <ul className="roadmap-field-list">
          <li className="roadmap-field-list-span">
            <span> React </span>
          </li>
          <li className="roadmap-field-list-span">
            <span> TypeScript </span>
          </li>
          <li className="roadmap-field-list-span">
            <span> Python </span>
          </li>
          <li className="roadmap-field-list-span">
            <span> Java </span>
          </li>
          <li className="roadmap-field-list-span">
            <span> JavaScript </span>
          </li>
          <li className="roadmap-field-list-span">
            <span> Docker </span>
          </li>
        </ul>
      </section>
    </div>
  );
};
