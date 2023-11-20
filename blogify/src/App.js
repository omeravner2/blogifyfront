import Navbar from "./components/pages/Navbar.jsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";
import Profile from "./components/pages/Profile.jsx";
import PostsList from "./components/pages/PostsList.jsx";
import LoginPage from "./components/authentication/LoginPage.jsx";
import Register from "./components/authentication/Register.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/mainpage"
            element={<MainPage url="http://127.0.0.1:8000/blogs/api/posts" />}
          />
          <Route path="/profile/:id" element={<Profile myprofile={false} />} />
          <Route path="/myprofile" element={<Profile myprofile={true} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
