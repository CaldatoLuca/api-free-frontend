import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <ContentController />
    </Router>
  );
}

function ContentController() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {location.pathname !== "/login" && <Footer />}
    </>
  );
}

export default App;
