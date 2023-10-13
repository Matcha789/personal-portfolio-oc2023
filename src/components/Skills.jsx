import React from "react";
import Section from "./common/Section";
import commerce from "../assets/commerce.png";
import research from "../assets/research.png";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      image: commerce,
      title: "UI/UX Design",
    },
    {
      id: 2,
      image: research,
      title: "Backend",
    },
    {
      id: 3,
      image: mobile,
      title: "Mobile",
    },
    {
      id: 4,
      image: web,
      title: "Frontend Web",
    },
  ];

  return (
    <Section
      title="Skills"
      subtitle="Here are a list of the skills that I can provide employers. I hope that these qualifications are what you are looking for. If not, please email me to learn about what else I can offer or what specifics you are looking for."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {skills.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={image}
              alt={title}
              className="w-36 h-36 md:h-44 object-contain"
            />
            <h3 className="mt-5 text-base">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
