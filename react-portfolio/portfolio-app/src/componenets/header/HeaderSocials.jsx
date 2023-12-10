import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/azam-shoukat-047a052a2/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Azamshoukat003" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/azam_shoukat007/" target="_blank">
        <FiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
