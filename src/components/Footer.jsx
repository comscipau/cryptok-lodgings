import React from "react";
import styles from "../styles";
import LOGO from "../assets/LOGO_PNG_1.png";
import { FaTelegramPlane, FaTwitter, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`${styles._marginX}`}>
      <img src={LOGO} alt="logo" className="mt-14 mx-auto" />
      <p className="text-white font-semibold text-lg text-center mt-6">
        DISCLAIMER
      </p>
      <p className="mt-2 md:px-10 text-white font-normal text-sm text-center">
        The Information on this website, and other official Cryptok Lodgings
        channels such as Discord and Twitter is provided for education and
        informational purposes only, without any express or implied warranty of
        any kind. They are not intended to be and does not constitute financial
        advice or investment advice any other advice.
      </p>
      <div className="flex justify-center mt-4">
        <ul className="flex items-center text-gold">
          <li className="mr-4 hover:cursor-pointer">
            <FaDiscord size={32} />
          </li>
          <li className="mr-4 hover:cursor-pointer">
            <FaTwitter size={32} />
          </li>
          <li className="hover:cursor-pointer">
            <FaTelegramPlane size={32} />
          </li>
        </ul>
      </div>
      <p className="text-white font-normal text-sm text-center mt-4 mb-5">
        ©Copyright 2022 Cryptok Lodgings - All rights reserved
      </p>
    </div>
  );
};

export default Footer;
