import React from "react";
import logo from "../images/mobile-logo.svg";

import fb from "../images/icon-facebook.svg";
import ig from "../images/icon-instagram.svg";
import pin from "../images/icon-pinterest.svg";
import tweet from "../images/icon-twitter.svg";
import yt from "../images/icon-youtube.svg";
import Button from "./Button";

const socials = [fb, yt, tweet, pin, ig];

const Footer = () => {
  return (
    <div className="bg-Dark_Blue p-16 text-white flex flex-col lg:flex-row  gap-12 justify-center items-center ">
      <div className="flex flex-col gap-4 justify-center items-center ">
        <img src={logo} alt="logo" className="w-[100px]" />
        <div className="flex gap-4">
          {socials.map((i, key) => {
            return <img src={i} alt="key" key={key} className="w-30 " />;
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 flex-[0.4]">

      <ul className="inherit  text-center lg:text-left ">
        <l1>About Us</l1>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
      <ul className="inherit text-center  lg:text-left ">
        <l1>Careers</l1>
        <li>Support</li>
        <li>Privacy Policy</li>
      </ul>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 lg:items-end">
        <Button /> 
        <p className="text-Grayish_Blue"> © Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
