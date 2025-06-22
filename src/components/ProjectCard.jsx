import React from "react";

const ProjectCard = ({ title, Image }) => {
  return (
    <div>
      <div className="w-64 h-80 hover:cursor-pointer flex flex-col justify-center items-center bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className=" text-6xl">{Image}</div>
        <h1 className="text-black text-2xl mt-5">{title}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
