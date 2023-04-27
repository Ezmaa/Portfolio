import React from 'react'

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-600 to-black text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl text-blue-400 font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>

      <p className="text-xl mt-10">
            I am a driven software developer able to communicate proficiently
            and professionally in a team setting. I can adapt and prioritize
            workflow, which allows me to work well with my team. 
      </p>

      <br />

      <p className="text-xl">
            I'm also just a
            regular person who loves getting outside and having a good time.
            Hiking and staying active my are my go to activities for a mental
            refesh, I play basketball and paintball for a little more
            competitive fun. I find that my hobbies keep my creative juices
            flowing and help me bring a fresh perspective to my work. I also have an 
            unhealthy love for pizza, you can catch me on the weekedns trying to find 
            the new best pizza spot!
      </p>
    </div>
  </div>
);
};

export default About