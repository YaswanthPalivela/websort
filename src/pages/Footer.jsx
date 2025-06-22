import React from "react";
import globe from "../assets/globe.svg";
import google from "../assets/google.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-lightGray px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Logo & Branding */}
        <div className="flex items-center gap-4">
          <img
            src={globe}
            alt="WebSort logo"
            className="h-16 bg-amber-500 p-1 rounded"
          />
          <div>
            <h1 className="text-3xl font-bold">WebSort</h1>
            <p className="text-lg">Your Vision Our Web</p>
          </div>
        </div>

        {/* Services and Contact */}
        <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
          <h4 className="text-base md:text-lg font-medium">
            Web Development | App Development | UI/UX Design | Digital Marketing
          </h4>

          <div className="flex flex-col gap-2 text-sm md:text-base">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span>📍 Based in Bangalore</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <img
                src={mail}
                alt="Email icon"
                className="h-4 bg-amber-500 rounded"
              />
              <span>contact@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <img
                src={phone}
                alt="Phone icon"
                className="h-4 bg-amber-500 rounded"
              />
              <span>+91 xxxxxxxxxx</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start items-center gap-5 mt-4">
            <img
              src={google}
              alt="Google"
              className="h-8 md:h-10 hover:scale-110 transition-transform duration-200"
            />
            <img
              src={linkedin}
              alt="LinkedIn"
              className="h-8 md:h-10 hover:scale-110 transition-transform duration-200"
            />
            <img
              src={instagram}
              alt="Instagram"
              className="h-8 md:h-10 hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
