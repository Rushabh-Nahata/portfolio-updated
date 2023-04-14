import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>rushabhnahata10@gmail.com</span>
        <span>+91 7620707855</span>
        <div className="f-icons">
        <a href="https://instagram.com/rushabh_nahata?igshid=YmJhNjkzNzY="> <Insta color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/profile.php?id=100008397572065"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/Rushabh-Nahata"> <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
