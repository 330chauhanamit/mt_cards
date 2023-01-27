import React from "react";
import GlobalStyles from '../src/styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line

import MainLandingPage from "../src/pages/MainLandingPage";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  
  return (
    <>
      <GlobalStyles />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}
