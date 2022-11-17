import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Album from "./pages/Album";
import Discover from "./pages/Discover";
import Info from "./pages/Info";
import Recycle from "./pages/Recycle";
import Achieve from "./pages/Achieve";
import Map from "./pages/Map";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/recycle" element={<Recycle />} />
          <Route path="/info" element={<Info />} />
          <Route path="/achieve" element={<Achieve />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<div>해당 주소는 없는 페이지입니다.</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
