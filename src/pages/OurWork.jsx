import React from "react";
import Button from "../components/button";
import Laptop from "../assets/Laptop.png";
import Bulb from "../assets/Bulb.png";
import { Element } from "react-scroll";

const OurWork = () => {
  return (
    <Element name="ourwork">
      <section className="h-full md:bg-lightGray">
        <div className="py-5 m-5 flex flex-col justify-center items-center gap-5 space-y-5">
          <div className="p-5 bg-black text-lightGray md:h-1/2  flex flex-col md:flex-row justify-center items-center  md:space-x-4 ">
            <div className="space-y-4 md:w-1/2 flex flex-col justify-center items-start">
              <h1 className="text-2xl md:text-6xl">
                See Our Work in Web Design and Development
              </h1>
              <p className="text-base md:text-xl">
                We specialize in building responsive,userfriendly websites
                tailored to client needs.take a look at our recent projects to
                see how design and functionality come together.
              </p>
              <div>
                <Button
                  ButtonName="Explore More"
                  otherStyles="border-2 border-gold"
                />
              </div>
            </div>
            <img src={Laptop} className="h-full object-contain mt-3" />
          </div>
          <div className="bg-lightGray p-5 text-black md:h-1/2 flex flex-col md:flex-row justify-center items-center md:space-x-4">
            {/* Left Card Content */}
            <div className="space-y-4 md:w-1/2 flex flex-col justify-center items-start ml-10">
              <h1 className="text-2xl md:text-6xl">Why We Stand Out</h1>
              <p className="text-base md:text-xl">
                At WebSort, we pride ourselves on our attention to detail and
                commitment to quality. Our team of experts combines creativity
                and technical expertise to deliver exceptional results. From
                concept to completion, we ensure that every project reflects our
                dedication to excellence.
              </p>
              <div className="flex justify-center items-center">
                <Button
                  ButtonName="Explore More"
                  otherStyles="border-2 border-gold"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
              <img
                src={Bulb}
                alt="Bulb Illustration"
                className="w-full h-auto max-h-96 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default OurWork;
