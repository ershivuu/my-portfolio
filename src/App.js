import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import "./App.css";

function App() {
  return (
    <Main>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Main>
  );
}

export default App;
