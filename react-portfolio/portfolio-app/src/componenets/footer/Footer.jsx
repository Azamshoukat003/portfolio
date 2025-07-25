import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Azam Shoukat
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/azam.shoukat.33/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/azam_shoukat007/" target="_blank">
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Azam Shoukat. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
