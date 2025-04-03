import React from "react";

import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming trip</p>
            <img src={assets.compass_icon} alt="compass-icon" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept : urban planning </p>
            <img src={assets.bulb_icon} alt="compass-icon" />
          </div>
          <div className="card">
            <p>Brainstrom tean bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="compass-icon" />
          </div>
          <div className="card">
            <p>Improve the readability of code</p>
            <img src={assets.code_icon} alt="compass-icon" />
          </div>
        </div>
        <div className="main-botton">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompy here" />
            <div>
              <img src={assets.gallery_icon} alt="gallery-icon" />
              <img src={assets.mic_icon} alt="mic-icon" />
              <img src={assets.send_icon} alt="send-icon" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people , so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
