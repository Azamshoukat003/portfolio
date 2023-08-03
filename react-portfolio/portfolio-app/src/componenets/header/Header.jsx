import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/mypic.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container head-container">
        <h5>Hello i'm</h5>
        <h1>Azam Shoukat</h1>
        <h5 className="text-light">Frontend Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
