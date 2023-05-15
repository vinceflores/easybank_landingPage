import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import close from "../images/icon-close.svg";
import ham from "../images/icon-hamburger.svg";
import Button from './Button'
import {Link} from 'react-scroll'

const n = [
  {
    name: "Home", 
    id: 'header'
  }, 
  {
    name: "About", 
    id: "About"
  }, 
  {
    name: "Contact", 
    id: "header"
  }, 
  {
    name: "Blog", 
    id: "articles"
  }, 
  {
    name: "Careers", 
    id: "header"
  }
]
const Navbar = () => {
  const [clicked, setclicked] = useState(false);
  const [hide, sethide] = useState('hidden');
  const handleClick = () => {
    if (clicked) {
      setclicked(false);
    } else {
      setclicked(true);
    }
  };

  useEffect(() => {
    if(!clicked){
      sethide('hidden')
    }else{
      sethide('')
    }
  }, [clicked])

  return (
    <div className="fixed top-0 w-screen  ">
      <div className="flex justify-between items center  md:px-24 p-4 py-8 bg-white ">
        <img src={logo} alt="nav_logo" className="md:max-w-[14rem] "/>
        <NavLinks foo={() => {}}arr={n} styles={`hidden lg:flex gap-8`} />
        <Button styles={`hidden lg:flex min-w-[6rem]`}/> 
        <img
          src={clicked ? close : ham}
          onClick={handleClick}
          alt="btn"
          className="lg:hidden md:w-[1.5rem] md:h-[1.5rem]"
        />
      </div>

      <div className={`${hide} fixed top-28 left-4 right-4     bg-white min-w-[60%] lg:hidden h-auto py-8 drop-shadow-[0px_100px_100px__rgba(0,0,0,0.8)]`}>
        <NavLinks foo={handleClick} arr={n} styles={`flex flex-col  gap-2`} />
      </div>
    </div>
  );
};

export default Navbar;

const NavLinks = ({ arr, styles ,foo}) => {

  return (
    <ul className={styles}>
      {arr.map((i, index) => {
        return (
          <li key={index}  className="cursor-pointer font-light text-md hover:underline decoration-Grayish_Blue decoration-4 underline-offset-4 lg:underline-offset-[20px] ">
            <Link onClick={()=> foo() }  to={` ${i.id}`} smooth={true} spy={true} offset={-100}  duration={500}>{i.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
