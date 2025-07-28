import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2025   E-Learning Platform. All rights reserved. <br/> Made with ❤️ <a href="">Vipin Kumar</a>
            </p>
            <div className="social-links">
                <a href=""><FaFacebook/></a>
                <a href=""><FaXTwitter/></a>
                <a href=""><FaInstagram/></a>
            </div>
        </div>
    </footer>
  )
};

export default Footer;