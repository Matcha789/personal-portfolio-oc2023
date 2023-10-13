import React from "react";
import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import profile from "../assets/profile_pic.png";
import resume from "../assets/Michael-Zaleski-Tech-Resume.pdf";

const Hero = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/michael-zaleski-920586233/",
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://github.com/",
      icon: <FaGithub />,
    },
  ];

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.remove("hide-down-arrow");
    else downArrow.classList.add("hide-down-arrow");
  });

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-600 uppercase font-bold">
        Michael Zaleski
      </h2>
      <h3 className="py-3 text-2xl">Frontend Web Developer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>, welcome to my
        site! I am a frontend web developer and traveler looking to work now.
      </p>

      {/* social icons */}
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-600"
          >
            {icon}
          </a>
        ))}
      </div>
      {/* avatar and resume*/}
      <div>
        <img
          src={profile}
          alt="avatar"
          className="w-60 h-60 md:h-72 object-cover  rounded-xl"
        />
        <a
          href={resume}
          download={true}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg"
        >
          Resume
        </a>
      </div>

      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
