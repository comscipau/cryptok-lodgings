import React from "react";

const BannerTicket = () => {
  return (
    <div className="bg-ticket w-[42rem] h-80 bg-center">
      <div className="text-white text-right mt-[4.5rem] pr-[4.8rem]">
        <p className="font-normal text-lg">NEXT DRAW</p>
        <p className=" font-semibold text-4xl mt-2">
          <span className="font-bold text-[3.5rem] mr-2">03</span>d{" "}
          <span className="ml-2 font-bold text-[3.5rem] mr-2">10</span>h{" "}
          <span className="ml-2 selection:font-bold text-[3.5rem] mr-2">
            05
          </span>
          m
        </p>
        <p className="font-normal text-lg mt-6">CURRENT PRIZE POOL</p>
        <p className="font-bold text-[3.5rem] tracking-wide mt-2">
          $150,000.00
        </p>
      </div>
    </div>
  );
};

export default BannerTicket;
