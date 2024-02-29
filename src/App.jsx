import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProfileData from "./Components/ProfileData";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile-data" element={<ProfileData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
