import React from 'react'
import cssIcon from "../assets/img/cssIcon.png"
import html from "../assets/img/html.png"
import bootstrap from "../assets/img/bootstrapIcon.png"
import jsIcon from "../assets/img/jsIcon.png"
import mongoDbIcon from "../assets/img/mongoDbIcon.png"
import mySQLIcon from "../assets/img/mySQLIcon.png"
import nodeJsIcon from "../assets/img/nodeJsIcon.png"
import reactIcon from "../assets/img/reactIcon.png"
import restApiIcon from "../assets/img/restApiIcon.png"
import tailwind from "../assets/img/tailwind.png"
import nextjs from "../assets/img/nextjs.png"
import graphql from "../assets/img/graphql.png"
import github from "../assets/img/github.png"

const Skills = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: cssIcon,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: jsIcon,
          title: "JavaScript",
          style: "shadow-green-500",
        },
        {
          id: 4,
          src: reactIcon,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: bootstrap,
          title: "Bootstrap",
          style: "shadow-purple-400",
        },
        {
          id: 7,
          src: graphql,
          title: "GraphQL",
          style: "shadow-pink-400",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-purple-400",
        },
        {
            id: 9,
            src: mySQLIcon,
            title: "MySQl",
            style: "shadow-teal-400",
          },
          {
            id: 10,
            src: mongoDbIcon,
            title: "MongoDB",
            style: "shadow-yellow-800",
          },
      ];
    
      return (
        <div
          name="experience"
          className="bg-gradient-to-b from-gray-800 to-gray-400 w-full h-screen"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="text-4xl text-blue-400 font-bold border-b-4 border-gray-500 p-2 inline">
                Skills
              </p>
              <p className="py-6">These are the technologies I've worked with</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default Skills