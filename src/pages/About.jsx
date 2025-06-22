import React from "react";
import Button from "../components/button";
import { Element } from "react-scroll";
const About = () => {
  return (
    <Element name="About">
      <section className="bg-lightGray text-black p-5 my-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-8">
          {/* Left Content */}
          <div className="flex-1 md:h-1/2 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
            <h2 className="text-xl md:text-3xl font-semibold">
              Where Innovation Meets Execution
            </h2>
            <div className="flex mt-8">
              <Button
                ButtonName="Know More"
                otherStyles="border-2 border-gold"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 h-1/2 space-y-4 md:ml-8">
            <p className="text-base md:text-lg leading-relaxed max-w-prose">
              At WebSort, we are passionate about transforming your digital
              aspirations into reality. Our team of skilled developers and
              designers work collaboratively to create stunning, user-friendly
              websites that not only look great but also perform seamlessly.
              Whether you need a landing page or a complex application, we’re
              here to help—every step of the way.
            </p>
          </div>
        </div>

        {/* Button */}
      </section>
    </Element>
  );
};

export default About;
