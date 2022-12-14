import React from "react";
import { prizePOOL } from "../connection";

const BannerTicket = () => {
  return (
    <React.Fragment>
      <div className="hidden lg:block bg-ticket w-[42rem] h-80 bg-center">
        <div className="text-white text-right mt-[4.5rem] pr-[4.8rem]">
          <p className="font-normal text-lg mt-6">CURRENT PRIZE POOL</p>
          <p className="font-bold text-[3.5rem] tracking-wide mt-2">
          {console.log(prizePOOL)}
            {prizePOOL>0 && "$"+prizePOOL}
            {prizePOOL===0 && "$0"}
          </p>
        </div>
      </div>
      <div className="block lg:hidden">
        <p className="font-semibold text-lg text-center">NEXT DRAW</p>
        <p className=" font-semibold text-4xl mt-4 text-center px-6">
          <span className="font-bold text-5xl mr-2">03</span>d{" "}
          <span className="ml-2 font-bold text-5xl mr-2">10</span>h{" "}
          <span className="ml-2 selection:font-bold text-5xl mr-2">05</span>m
        </p>
        <div className="bg-ticket_mobile bg-center w-[22rem] h-44 scale-[0.93] -mt-14">
          <div className="text-white text-right mt-14 mr-11">
            <p className="font-semibold text-base pt-14">CURRENT PRIZE POOL</p>
            <p className="font-semibold text-[1.75rem]">$150,000.00</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BannerTicket;
