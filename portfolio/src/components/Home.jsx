import React from "react";
import laptopwave from "../assets/img/laptop-wave.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-orange-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl pt-40 font-bold text-white">
            Relentlessly Solving Problems
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I am a driven software developer able to communicate proficiently
            and professionally in a team setting. I can adapt and prioritize
            workflow, which allows me to work well with my team. I'm also just a
            regular person who loves getting outside and having a good time.
            Hiking and staying active my are my go to activities for a mental
            refesh, I play basketball and paintball for a little more
            competitive fun. I find that my hobbies keep my creative juices
            flowing and help me bring a fresh perspective to my work
          </p>
          <div>
            <button className="text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={laptopwave}
            alt="Bitmoji"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;

// name attribute for react smooth scrolling
// via attribute is middle color of the gradient