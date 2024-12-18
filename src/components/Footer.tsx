import React from "react";
import "./indexx.css"; // Import file CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>COMPANY</h3>
        <p>Home</p>
        <p>Collections</p>
        <p>About</p>
      </div>
      <div className="footer-section">
        <h3>RESOURCES</h3>
        <p>Contact</p>
        <p>Discord</p>
      </div>
      <div className="footer-section">
        <h3>COMMUNITY</h3>
        <p>Discord</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
      <div className="footer-copyright">
        <p>2022 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
