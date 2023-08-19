import React from "react";
import bg from "./bg.jpg"

const Hero = () => {
  return (
    <div className="w-full h-screen">
        <img className="top-0 left-0 object-cover w-full h-full" src={bg} alt="/"/>     
        <div className="bg-black/30 absolute top-0 left-0 w-full h-screen ">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
            <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4 ">
                <p>ALL Inclusive </p>
                <h1 className="font-bold text-5xl md:text-6xl drop-shadow-2xl ">Private Beaches & Gateway</h1>
                <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iusto at dolorum magnam nihil error ipsum deserunt voluptate quae perspiciatis!</p>
                <button className="bg-white text-black">Reserve Now</button>
            </div>
        </div>
        </div>
      </div>

  );
};

export default Hero;
