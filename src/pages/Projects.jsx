import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Element } from "react-scroll";

const services = [
  { title: "App Development", icon: "📱" },
  { title: "Web Development", icon: "💻" },
  { title: "UI/UX Design", icon: "🎨" },
  { title: "Digital Marketing", icon: "🤝" },
  //{ title: "Cloud Solutions", icon: "☁️" },
];

const Projects = () => {
  return (
    <Element name="projects">
      <section>
        <div className="h-full p-5">
          <h1 className="text-2xl md:text-6xl mb-8 text-center">Our Services</h1>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row gap-10">
              {services.map((service, index) => (
                <ProjectCard
                  key={index}
                  title={service.title}
                  Image={service.icon}
                  x
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
