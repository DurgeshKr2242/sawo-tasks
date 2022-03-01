import React, { useState } from "react";
import BlogInputs from "./InputBoxes/BlogInputs";
import ProjectInputs from "./InputBoxes/ProjectInputs";
import SocialMentions from "./InputBoxes/SocialMentions";

const options = ["Social Mentions", "Blogs", "Projects"];

const InputArea = () => {
  const [activeInput, setActiveInput] = useState("Social Mentions");

  return (
    <div className="w-full flex flex-col font-semibold gap-4 mt-8 mb-8">
      <ul className="flex flex-col mobile-l:flex-row w-full justify-between gap-5 mt-20 ">
        {options.map((option, i) => {
          return (
            <li
              key={i}
              onClick={() => setActiveInput(option)}
              className={`${
                activeInput === option ? "bg-yellow " : "border-2 border-yellow"
              } px-6 py-1 rounded-lg cursor-pointer hover:bg-yellow/50`}
            >
              {option}
            </li>
          );
        })}
      </ul>

      {activeInput === "Social Mentions" ? (
        <SocialMentions />
      ) : activeInput === "Blogs" ? (
        <BlogInputs />
      ) : (
        <ProjectInputs />
      )}
    </div>
  );
};

export default InputArea;
