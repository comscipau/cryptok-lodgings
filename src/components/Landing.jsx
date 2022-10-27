import React from "react";
import styles from "../styles";
import { FaAngleRight } from "react-icons/fa";
// import BANNER_MOBILE from "../assets/CROWDMOBILE_2.png";

const Landing = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="hidden md:block bg-banner h-[557px] w-screen bg-no-repeat bg-cover bg-center" />
      <div className="block md:hidden bg-gold h-[557px] w-screen">
        <div className={`${styles._marginX}`}>
          <p className="font-semibold text-4xl text-center pt-32">
            Cryptok Lodgings
          </p>
          <p className="font-semibold text-lg text-center mt-2">
            YOUR NETWORK, IS YOUR NETWORTH.
          </p>
        </div>
        <div className="block md:hidden bg-banner_mobile -mt-3 h-[557px] w-screen bg-no-repeat bg-cover bg-bottom" />
      </div>
      <div className={`${styles._marginX}`}>
        <p className="hidden md:block text-surface_muted text-[3.63rem] font-bold mt-12 text-center">
          YOUR <span className="text-gold">NETWORK</span>, IS YOUR{" "}
          <span className="text-gold">NETWORTH</span>.
        </p>
        <div className="md:mx-20">
          <p className="mt-10 md:mt-3 md:px-5 text-justify md:text-center text-white text-lg font-semibold">
            We are a central hub made for those in the Web3 space. Our Goal is
            to offer our community alpha, raffles, educational content and
            exciting games! At Cryptok Lodgings, the goal is to elevate one
            another. <br className="hidden md:block" />
            Your success is our success!
          </p>
        </div>
        <button
          className="flex items-center border-[3px] border-gold text-white rounded-lg font-medium 
        text-base py-4 px-14 mt-8 mb-5 mx-auto"
        >
          Buy Raffle Tickets
          <span className="ml-3 text-2xl">
            <FaAngleRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
