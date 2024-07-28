import "../style/sliderscreen1.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Slidernavbar from "./slidernavbar";
// import "./NewScreen.css"; // Import the CSS file for styling

const NewScreen = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // Navigate to the home screen or any other screen
  };

  return (
    <div className="fullscreen-overlay">
      <Slidernavbar></Slidernavbar>
      <button className="close-button" onClick={handleClose} style={{color:"white"}}>
        ×
      </button>
      <div className="content-container">
        <h1>New Screen</h1>
        <p>This is the new screen you navigated to.</p>
      </div>
    </div>
  );
};

export default NewScreen;
