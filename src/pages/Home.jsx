import React from "react";
import Button from "../components/button";
import wireframe from "../assets/wireframe.png";
import { Link, Element } from "react-scroll";
import arrowDown from "../assets/mouse.svg";

const Home = () => {
  return (
    <Element name="Home">
      <section className=" h-screen flex flex-col md:flex-row justify-center items-center leading-3 pt-3 md:p-5 ">
      <section className=" h-full md:h-screen flex flex-col md:flex-row justify-center items-center leading-3 pt-36 md:p-5">


      <div className="pt-20 flex flex-col md:flex-row justify-center items-center ">
        <div className="md:w-1/2 space-y-4 ml-4 ">

          <h1 className=" text-2xl md:text-6xl">
            Digitizing Ideas with Clean Code & Modern Design
          </h1>
          <p className="text-base md:text-xl text-pretty">
            At WebSort, we transform your vision into reality with our expertise
            in web development and design. Our team is dedicated to delivering
            high-quality, user-friendly websites that not only look great but
            also perform seamlessly. Whether you need a simple landing page or a
            complex web application, we've got you covered. Let's build
            something amazing together!
          </p>
          <div className="flex items-center gap-4 mt-4 ">
            <Link to="Contact" smooth={true} duration={500}>
              <Button
                ButtonName="Contact Us"
                otherStyles=" border-2 border-gold"
              />
            </Link>
            <Button
              ButtonName="Know More"
              otherStyles=" border-2 border-gold"
            />
            <div className=" animate-bounce">
              <img src={arrowDown} className="h-10" />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col md:flex-row justify-center items-center">
          <img src={wireframe} className="h-full md:w-full object-cover" />
        </div>
      </div>
      </section>
      </section>
    </Element>
  );
};

export default Home;
