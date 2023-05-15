import React from "react";
import mock from "../images/image-mockups.png";
import Button from "./Button";
const Header = () => {



  return (
    <div id="header" className="header flex flex-col gap-8 lg:flex-row-reverse px-8 bg-header_mobile lg:bg-header_desktop bg-no-repeat bg-right-top lg:bg-[right_-14rem_top] bg-contain ">
      <img src={mock} alt="mock" />

      <div className="flex flex-col justify-center items-center lg:justify-center lg:items-start gap-4 lg:px-24">
        <h1 className="max-md:min-w-[30vw] lg:w-[30vw] px-8 lg:px-0 text-center lg:text-left text-4xl lg:text-6xl">
          Next generation digital banking
        </h1>
        <p className="min-w-[30vw]  font-light text-center lg:text-left px-8 lg:px-0  text-Grayish_Blue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <Button className="lg:ml-[12rem] max-w-[6rem]" />
      </div>
    </div>
  );
};

export default Header;
