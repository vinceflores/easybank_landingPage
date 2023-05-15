import React from "react";
import b from "../images/icon-budgeting.svg";
import a from "../images/icon-online.svg";
import c from "../images/icon-onboarding.svg";
import d from "../images/icon-api.svg";
const info = [
  {
    url: a,
    title: "Online Banking",
    description: `Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world. `,
  },
  {
    url: b,
    title: "Simple Budgeting",
    description: `See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.`,
  },
  {
    url: c,
    title: "Fast Onboarding",
    description: `We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.`,
  },
  {
    url: d,
    title: " Open API",
    description: `Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.`,
  },
];


const About = () => {
  return (
    <div id="About" className=" About w-screen flex flex-col md:flex-row pb-24">
      <div className="flex-1 flex flex-col gap-4 text-center lg:text-left lg:px-24">
        <h1 className="text-2xl lg:text-4xl ">Why choose Easybank?</h1>
        <p className="font-light text-Grayish_Blue lg:w-[40vw]">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <Cards content={info}/> 
      </div>
    </div>
  );
};

export default About;

const Cards = ({ content }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-start items-start ">
      {content.map((i, index) => {
        return (
          <div key={index} className="flex flex-col text-center lg:text-left justify-center items-center lg:justify-center lg:items-start gap-6 px-4 ">
            <img src={i.url} alt="index" className="w-[70px] " />
            <h1 className="text-2xl">{i.title}</h1>
            <p className="text-Grayish_Blue">{i.description}</p>
          </div >
        );
      })}
    </div>
  );
};
