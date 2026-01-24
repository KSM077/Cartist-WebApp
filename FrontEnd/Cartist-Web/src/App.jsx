import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login-Register";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/forum" element></Route>
      </Routes>
    </Router>
  );
}

export default App;
