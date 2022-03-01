import React, { useState } from "react";
import { serverTimestamp } from "firebase/firestore";
import { addTask } from "../../../apis";

import { useGlobalAuthContext } from "../../../AuthContext";
const Projects = () => {
  const { user } = useGlobalAuthContext();
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [description, setDescription] = useState("");
  const [projectName, setProjectName] = useState("");
  const projectSubmitHandler = async () => {
    const data = {
      taskType: "Project",
      Project: {
        githubUrl,
        liveUrl,
        description,
        projectName,
      },
      points: 0,
      timestamp: serverTimestamp(),
      createdBy: {
        name: user.data.name,
        email: user.data.emailId,
      },
      approved: false,
    };

    const addedProject = await addTask(data);
    console.log(addedProject);

    setGithubUrl("");
    setLiveUrl("");
    setDescription("");
    setProjectName("");
  };

  return (
    <>
      <div className="flex items-center gap-2 mt-4">
        <div className="w-full h-1 bg-yellow"></div>
        <p>Project</p>
        <div className="h-1 bg-yellow w-7"></div>
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="githubUrl">
          Project Name :{" "}
        </label>
        <input
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="flex-grow input-box"
          id="githubUrl"
          type="text"
        />
      </div>
      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="githubUrl">
          GitHub Url :{" "}
        </label>
        <input
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          className="flex-grow input-box"
          id="githubUrl"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="liveUrl">
          Live Url :{" "}
        </label>
        <input
          value={liveUrl}
          onChange={(e) => setLiveUrl(e.target.value)}
          className="flex-grow input-box"
          id="liveUrl"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="description">
          Describe :{" "}
        </label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="flex-grow input-box"
          id="description"
          type="text"
        />
      </div>
      <button onClick={projectSubmitHandler} className="mt-6 button-primary">
        Submit Your Task
      </button>
    </>
  );
};

export default Projects;
