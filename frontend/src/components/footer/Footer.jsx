import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2025   E-Learning Platform. All rights reserved. <br/> Made with ❤️ <a href="">Vipin Kumar</a>
            </p>
            <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaXTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
        </div>
    </footer>
  )
};

export default Footer;