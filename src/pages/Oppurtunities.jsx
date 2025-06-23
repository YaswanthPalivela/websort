import React from "react";

import Button from "../components/button";

const Oppurtunities = () => {
  return (
    <section>
      <div className="h-full ">
        <div className="bg-gold p-3 flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-5xl text-black font-bold mb-4 text-center">
            See What Opportunities Await You
          </h1>
          <Button
            ButtonName="Explore More"
            otherStyles="bg-amber-500 text-xl "
          />
        </div>
      </div>
    </section>
  );
};

export default Oppurtunities;
