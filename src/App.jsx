// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // Home component with popup
import Login from "./components/Login";
import Signup from "./components/Signup";
import Upload from "./components/Upload"; // Updated to UploadBattle
import RapBattle from "./components/RapBattle";
import Dashboard from "./components/Dashboard";
import About from "./components/About"; // Import the About component
  
const App = () => {
  const [uploadedBattles, setUploadedBattles] = useState([]);

  // Sample user data
  const [user, setUser] = useState({
    username: "RapStar99",
    bio: "Passionate rapper and music enthusiast.",
    portfolio: "https://example.com/rap-portfolio", // Example link
    rank: "Gold",
    battleRecord: "10 Wins, 5 Losses",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
  });

  const handleUpload = (battle) => {
    setUploadedBattles((prevBattles) => [...prevBattles, battle]);
  };

  const handleUpdateProfile = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-20">
        {/* Adjust margin to avoid Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<Upload onUpload={handleUpload} />} />
          <Route path="/rapbattles" element={<RapBattle />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                user={user}
                onUpdate={handleUpdateProfile}
                uploadedBattles={uploadedBattles}
              />
            }
          />
          <Route path="/about" element={<About />} /> {/* Add About route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
