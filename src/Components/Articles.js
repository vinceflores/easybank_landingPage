import React from "react";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";

const info = [
  {
    title: "By Claire Robinson",
    header: `Receive money in any currency with no fees`, 
    url: currency,
    description: `
      The world is getting smaller and we’re becoming more mobile. So why should you be 
      forced to only receive money in a single …`,
  },
  {
    title: "By Wilson Hutton",
    header: `Treat yourself without worrying about money`,
    url: restaurant,
    description: `
     Our simple budgeting feature allows you to separate out your spending and set 
     realistic limits each month. That means you …`,
  },
  {
    title: "By Wilson Hutton",
    header:`Take your Easybank card wherever you go`, 
    url: plane,
    description: `
     We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
     while you’re abroad. We’ll even show you …`,
  },
  {
    title: "By Claire Robinson",
    header: `Our invite-only Beta accounts are now live!`, 
    url: confetti,
    description: `
       After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
       It’s easy to request an invite through the site ...`,
  },
];

const Articles = () => {
  return (
    <div className="articles lg:px-32 px-4 py-12 flex flex-col gap-4" id="articles">
      <h1 className="text-4xl text-center lg:text-left ">Latest Articles</h1>
      <Cards content={info}/>
    </div>
  );
};

export default Articles;

const Cards = ({ content }) => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row ">
      {content.map((i, index) => {
        return (
          <div key={index} className="flex flex-col gap-3 py-12 text-left">
            <img src={i.url} alt="index" className="flex-[0.5] h-[50%]" />
            <div className="inherit px-2">
              <h2 className="text-xs text-Lime_Green ">{i.title}</h2>
            <h1 className="text-xl text-Dark_Blue ">{i.header}</h1>
            <p className="text-Grayish_Blue ">{i.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
