import React from "react";
import BannerTicket from "../fragments/BannerTicket";
import { FaAngleRight } from "react-icons/fa";
import styles from "../styles";
import TICKET1 from "../assets/FLYING_TICKET_1.png";
import TICKET2 from "../assets/FLYING_TICKET_2.png";
import { approveUSD,participate,getFactoryContract } from "../connection";

const Raffle = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <div className="w-full">
      <div className="h-[21.5rem] bg-gold" />
      <div className="-mt-[11.5rem] lg:-mt-[10.5rem] flex justify-center">
        <BannerTicket />
      </div>
      <button
        className="flex items-center border-[3px] border-gold text-white rounded-lg font-medium 
        text-base py-4 px-14 mt-16 lg:mt-10 mb-5 mx-auto" onClick={async()=>{
          await approveUSD();
        }}
      >
        Approve USD
        <span className="ml-3 text-2xl">
          <FaAngleRight />
        </span>
      </button>
      <button
        className="flex items-center border-[3px] border-gold text-white rounded-lg font-medium 
        text-base py-4 px-14 mt-16 lg:mt-10 mb-5 mx-auto" onClick={async()=>{
          await participate();
          props.up(false);

        }}
      >
        Buy Raffle Tickets
        <span className="ml-3 text-2xl">
          <FaAngleRight />
        </span>
      </button>
      <p className="text-center text-white font-semibold text-5xl mb-12 md:mb-0 mt-[4.13rem] md:mt-12 md:font-bold md:text-[3.5rem] ">
        HOW TO PLAY
      </p>
      <div
        className={`${styles._marginX} grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14 mt-10`}
      >
        <div>
          <p className="text-white font-normal text-lg">STEP 01</p>
          <p className="my-2 font-semibold text-4xl text-gold">Buy a ticket</p>
          
        </div>
        <div>
          <p className="text-white font-normal text-lg">STEP 02</p>
          <p className="my-2 font-semibold text-4xl text-gold">
            Wait for the Draw
          </p>
          
        </div>
        <div>
          <p className="text-white font-normal text-lg">STEP 03</p>
          <p className="my-2 font-semibold text-4xl text-gold">
            Check for Winner, prize is distributed automatically
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
