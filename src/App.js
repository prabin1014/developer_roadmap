import React from "react";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
