import React from "react";
import Section from "./common/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import contact from "../assets/mobile.png";

const Contact = () => {
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

  return (
    <Section
      title="Contact"
      subtitle="These are the ways you can get in touch with me. Hope to hear from you soon! :)"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div>
          <img src={contact} alt="contact info" className="w-32 h-32" />
        </div>
        <div>
          <p className="max-w-xs md:max-x-lg font-extralight">
            I am open to talking about part-time, full-time, and contract work
            opportunities. Feel free to contact me anytime.
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl">
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

        {/* Button Form */}
        <div className="p-8 text-left w-full">
          <form
            action="https://getform.io/f/bec6d763-e697-45cf-a638-30d40d088104"
            method="POST"
          >
            <div className="gap-4 w-full">
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400"
                />

                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-extralight">
                    message
                  </label>
                  <textarea
                    name="message"
                    rows="10"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center">
              <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
