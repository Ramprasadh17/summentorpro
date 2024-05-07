import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Past_editions from "./Components/Past_editions";
import Nomination from "./Components/Nomination";
import Awards from "./Components/Awards";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/past_editions" element={<Past_editions />} />
          <Route path="/nomination" element={<Nomination />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
