import React, { useState } from "react";
import { toast } from "react-toastify";
import { serverTimestamp } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { addTask } from "../../../apis";

import { useGlobalAuthContext } from "../../../AuthContext";
const Projects = () => {
  const { user } = useGlobalAuthContext();
  const [loading, setLoading] = useState(false);
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [description, setDescription] = useState("");
  const [projectName, setProjectName] = useState("");

  const projectSubmitHandler = async () => {
    setLoading(true);

    const data = {
      taskType: "Project",
      Project: {
        githubUrl,
        liveUrl,
        description,
        projectName,
      },
      points: 0,
      timestamp: Timestamp.now(),
      createdBy: {
        name: user.data.name,
        email: user.data.emailId,
        champType: user.data.champType,
        creatorId: user.id,
      },
      approved: false,
    };
    try {
      if (!githubUrl || !projectName) {
        throw "Please enter a valid Project name or Repo link";
      }
      const addedProject = await addTask(data);
      console.log(addedProject);
      toast("Task Submitted, waiting for approval!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error(err, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setGithubUrl("");
    setLiveUrl("");
    setDescription("");
    setProjectName("");
    setLoading(false);
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
      <button
        disabled={loading ? true : false}
        onClick={projectSubmitHandler}
        className="mt-6 button-primary"
      >
        Submit Your Task
      </button>
    </>
  );
};

export default Projects;
