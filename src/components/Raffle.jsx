import React from "react";
import BannerTicket from "../fragments/BannerTicket";
import { FaAngleRight } from "react-icons/fa";
import styles from "../styles";
import TICKET1 from "../assets/FLYING_TICKET_1.png";
import TICKET2 from "../assets/FLYING_TICKET_2.png";

const Raffle = () => {
  return (
    <div className="w-full">
      <div className="h-96 bg-gold" />
      <div className="-mt-[10.5rem] flex justify-center">
        <BannerTicket />
      </div>
      <button
        className="flex items-center border-[3px] border-gold text-white rounded-lg font-medium 
        text-base py-4 px-14 mt-10 mb-5 mx-auto"
      >
        Buy Raffle Tickets
        <span className="ml-3 text-2xl">
          <FaAngleRight />
        </span>
      </button>
      <p className="text-center text-white font-bold text-[3.5rem] mt-12">
        HOW TO PLAY
      </p>
      <div className={`${styles._marginX} grid grid-cols-3 gap-8 mb-14 mt-10`}>
        <div>
          <p className="text-white font-normal text-lg">STEP 01</p>
          <p className="my-2 font-semibold text-4xl text-gold">Buy a ticket</p>
          <p className="text-white font-normal text-base">
            Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem.
          </p>
        </div>
        <div>
          <p className="text-white font-normal text-lg">STEP 02</p>
          <p className="my-2 font-semibold text-4xl text-gold">
            Wait for the Draw
          </p>
          <p className="text-white font-normal text-base">
            Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem.
          </p>
        </div>
        <div>
          <p className="text-white font-normal text-lg">STEP 03</p>
          <p className="my-2 font-semibold text-4xl text-gold">
            Check for Prizes
          </p>
          <p className="text-white font-normal text-base">
            Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem.
          </p>
        </div>
      </div>
      <div className="h-64 bg-gold flex gap-4 items-center justify-center">
        <img src={TICKET2} alt="flying ticket" className="-mt-16" />
        <p className="font-semibold text-2xl text-center">
          No prices to collect. <br /> Better luck next time!
        </p>
        <img src={TICKET1} alt="flying ticket" className="mt-7" />
      </div>
    </div>
  );
};

export default Raffle;
