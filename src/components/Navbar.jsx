import React, { useState } from "react";
import LOGO from "../assets/LOGO_PNG_DARK_1.png";
import styles from "../styles";
import { FaTelegramPlane, FaTwitter, FaDiscord } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-screen bg-gold z-40">
      {/* <div className="absolute w-full"> */}
      <div
        className={`${styles._marginX} pt-6 md:pt-8 mb-2 flex justify-between`}
      >
        <div className="flex items-center">
          <img src={LOGO} alt="logo" className="hover:cursor-pointer" />
          <p className="hidden md:flex ml-2 font-semibold text-lg">
            Cryptok Lodgings
          </p>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center">
            <li className="hover:cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="ml-4 hover:cursor-pointer">
              <Link to="/raffle">Raffle</Link>
            </li>
            <li className="ml-4 mr-14 hover:cursor-pointer">ABOUT US</li>
          </ul>
          <div className="flex">
            <ul className="flex items-center text-black">
              <li className="mr-4 hover:cursor-pointer">
                <FaDiscord size={30} />
              </li>
              <li className="mr-4 hover:cursor-pointer">
                <FaTwitter size={30} />
              </li>
              <li className="hover:cursor-pointer">
                <FaTelegramPlane size={30} />
              </li>
            </ul>
          </div>
          <button className="bg-surface_cryptok my-3 px-4 ml-4 mr-4 rounded-md font-medium text-base text-gold">
            Connect Wallet
          </button>
        </div>
        <div
          onClick={handleNav}
          className="flex items-center lg:hidden hover:cursor-pointer"
        >
          {nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full z-50 border-r border-r-gold bg-[#0d0d0d] ease-in-out duration-500"
              : "fixed left-[-100%] top-0 w-[60%] h-full z-50 ease-in-out duration-500"
          }
        >
          <ul className="uppercase p-4 text-gold">
            <li
              className="p-4 border-b border-gold hover:cursor-pointer"
              onClick={handleNav}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="p-4 border-b border-gold hover:cursor-pointer"
              onClick={handleNav}
            >
              <Link to="/raffle">RAFFLE</Link>
            </li>
            <li className="p-4 border-b border-gold hover:cursor-pointer">
              ABOUT US
            </li>
          </ul>
          <div className="flex pl-8">
            <ul className="flex items-center text-gold">
              <li className="mr-4 hover:cursor-pointer">
                <FaDiscord size={30} />
              </li>
              <li className="mr-4 hover:cursor-pointer">
                <FaTwitter size={30} />
              </li>
              <li className="hover:cursor-pointer">
                <FaTelegramPlane size={30} />
              </li>
            </ul>
          </div>
          <hr className="m-4 border-gold" />
          <button className="bg-gold my-3 px-4 ml-8 mr-4 rounded-md font-medium text-base text-surface_cryptok">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
