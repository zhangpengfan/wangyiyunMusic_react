import Laycoponent from "./component/Lazy.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./component/Nav";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Laycoponent path="Home/index.jsx" />} />
        <Route
          path="/Search"
          element={<Laycoponent path="Search/Search.jsx" />}
        />
        <Route
          path="/Buttons"
          element={<Laycoponent path="button/button.jsx" />}
        />
        <Route path="*" element={<Laycoponent path="404/Nofont.jsx" />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
}
