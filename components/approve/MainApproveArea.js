import React, { useState, useEffect } from "react";
import SocialMentionApprove from "./approveBoxes/SocialMentionApprove";
import BlogApprove from "./approveBoxes/BlogApprove";
import ProjectApprove from "./approveBoxes/ProjectApprove";
import { getAllPendingSocialMentions } from "../../apis";

const options = ["Social Mentions", "Blogs", "Projects"];

const MainApproveArea = () => {
  const [activeInput, setActiveInput] = useState("Social Mentions");
  const [allPendingSocialMention, setAllPendingSocialMention] = useState([]);

  useEffect(() => {
    getAllPendingSocialMentions().then((posts) => {
      setAllPendingSocialMention(posts);
      // console.log(posts);
    });
  }, []);

  return (
    <div className="flex flex-col w-full gap-4 mt-8 mb-8 font-semibold">
      <ul className="flex flex-col justify-between w-full gap-5 mt-20 mobile-l:flex-row ">
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
        allPendingSocialMention?.map((post) => {
          return (
            <SocialMentionApprove
              post={post}
              // allPendingSocialMention={allPendingSocialMention}
            />
          );
        })
      ) : activeInput === "Blogs" ? (
        <BlogApprove />
      ) : (
        <ProjectApprove />
      )}
    </div>
  );
};

export default MainApproveArea;
