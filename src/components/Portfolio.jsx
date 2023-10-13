import React from "react";
import Section from "./common/Section";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import recipe from "../assets/gatsby-site-img.png";
import admin from "../assets/react-admin-img.png";
import todo from "../assets/todo-list-img.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: admin,
      title: "Administration Website",
      github: "https://github.com/Matcha789/mz-react-admin",
      demo: "https://mz-react-admin.netlify.app",
    },
    {
      id: 2,
      image: todo,
      title: "Todo List",
      github: "https://github.com/Matcha789/mz-todolist",
      demo: "https://mz-todo-list.netlify.app",
    },
    {
      id: 3,
      image: recipe,
      title: "Recipe Website",
      github: "https://github.com/Matcha789/gatsby-tutorial-project",
      demo: "https://gatsby-tutorial-recipe-website.netlify.app",
    },
  ];

  return (
    <Section
      title="Portfolio"
      subtitle="This is a list of some of the personal projects I have worked on that showcase the skills I have learned."
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
