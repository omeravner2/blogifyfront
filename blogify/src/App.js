import Navbar from "./components/pages/Navbar.jsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";
import Profile from "./components/pages/Profile.jsx";
import PostsList from "./components/pages/PostsList.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/"
            element={<PostsList url="http://127.0.0.1:8000/blogs/api/posts" />}
          />
          <Route path="/profile" element={<Profile myprofile={false} />} />
          <Route path="/my-profile" element={<Profile myprofile={true} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
