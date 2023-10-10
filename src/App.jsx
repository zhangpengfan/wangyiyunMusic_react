import Laycoponent from "./component/Lazy.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./component/Nav";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<> <Nav /><Laycoponent path="Home/index.jsx" /></>} />
        <Route path="/Search" element={<Laycoponent path="Search/Search.jsx" />} />
        <Route path="/Mv" element={<> <Nav /> <Laycoponent path="Mv/Mv.jsx" /></>} />
        <Route path="/Mv/Mvplay/:id" element={<Laycoponent path="Mv/Mvplay.jsx" />} />
        <Route path="*" element={<Laycoponent path="404/Nofont.jsx" />} />
        <Route path="/Login" element={<Laycoponent path="login/Login.jsx" />} />
        <Route path="/PersonalCenter/Edit" element={<Laycoponent path="PersonalCenter/Edit.jsx" />} />
        <Route path="/Playlist/:id" element={<Laycoponent path="Playlist/Playlist.jsx" />} />
        <Route path="/PersonalCenter" element={<><Nav /><Laycoponent path="PersonalCenter/PersonalCenter.jsx" /> </>} />
      </Routes>
    </BrowserRouter>
  );
}
