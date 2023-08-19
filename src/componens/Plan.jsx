import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1000px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 ">
      <div className="grid grid-cols-2 grid-row-6 h-auto">
        {/* left side */}
        <img
          className="row-span-3 object-cover w-full h-full p-2 "
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 "
          src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="/"
        />
        <img
          className="row-span-2 object-cover h-full w-full p-2 "
          src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
          alt="/"
        />
        <img
          className="row-span-3 object-cover h-full  w-full p-2 "
          src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="/"
        />
        <img
          className="row-span-2 object-cover h-full w-full p-2 "
          src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80"
          alt="/"
        />
      </div>
      {/* right side */}
      <div className="flex flex-col justify-center h-full">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, ut!
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum
          in tempora rerum, suscipit culpa, voluptas ex excepturi repellat
          eveniet mollitia omnis doloremque quam modi, reprehenderit nam
          blanditiis nesciunt praesentium!
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl hover:border-none">
            Learn More
          </button>
          <button className="border-black mr-4 hover:shadow-xl hover:border-none">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
