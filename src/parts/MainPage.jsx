import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="app-container">
      <h1>Fruit.AI</h1>
      <p className="tagline">"Be Healthy!"</p>

      <div className="button-grid">
        <div className="grid-item chat">
          <span>Chat.</span>
        </div>
        <div className="grid-item translate">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg"
            alt="Translate"
          />
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <Link to="/faq" className="grid-item faqs">
          FAQs
        </Link>
        <div className="grid-item about">About</div>
      </div>
    </div>
  );
}

export default MainPage;
