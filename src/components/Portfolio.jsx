import React from "react";
import devMatch from "../assets/img/devMatch.png";
import dotb from '../assets/img/dotb.png';
import proj3 from '../assets/img/proj3.png';


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "devMatch",
      src: devMatch,
      description: "A dating app for web developers",
      developement: "MERN Appplication",
      code: "https://github.com/Ezmaa/devMatch",
      demo: "https://ezmaa.github.io/Drink-Outside-The-Box/",
    },
    {
      id: 2,
      title: "Drink Outside The Box",
      src: dotb,
      description: "An app that generates a random drink and a joke",
      developement: "JavaScript, CSS, Bulma",
      code: "https://github.com/Ezmaa",
      demo: "https://ezmaa.github.io/Work-Day-Scheduler/",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      src: proj3,
      description:
        "A weahter dashboard that collects information from the openweather api",
      developement: "JavaScript, CSS, HTML",
      code: "https://github.com/Ezmaa/Weather-Dashboard",
      demo: "https://ezmaa.github.io/Weather-Dashboard/",
    }, 
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-blue-400 font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo, title, description, developement }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div>
              <h4 className="pt-2 text-blue-400 font-bold text-xl">{title}</h4>
          <div className="pt-2 pb-2">{description}</div>
          <div className="flex flex-col">{developement}</div>
          </div>
              <div className="flex items-center justify-center">
                <a href={demo}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
