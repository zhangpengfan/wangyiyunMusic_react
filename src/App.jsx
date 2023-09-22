import React from "react";
import Home from "./view/Home/index";
import Search from "./view/Search/Search";
import Buttons from "./view/button/button";
import No from "./view/404/Nofont.jsx";
import Nav from "./component/Nav";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Buttons" element={<Buttons />} />
        <Route path="/No" element={<No />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
}
