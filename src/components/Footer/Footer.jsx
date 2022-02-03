import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../assets/logo.jpg";
import SocialMedia from "../SocialMedia/SocialMedia.jsx";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Link to="/">
          <img className="main-logo1" src={MainLogo} alt="logo-icon"></img>
        </Link>
      </div>
      <div className="social">
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
