import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
