import React, { useState } from "react";
import { addTask } from "../../../apis";
import { serverTimestamp } from "firebase/firestore";
import { useGlobalAuthContext } from "../../../AuthContext";

const BlogInputs = () => {
  const { user } = useGlobalAuthContext();
  const [blogUrl, setBlogUrl] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [platform, setPlatform] = useState("");

  const blogSubmitHandler = async () => {
    const data = {
      taskType: "Blog",
      Blog: {
        blogTitle,
        platform,
        blogUrl,
      },
      points: 0,
      timestamp: serverTimestamp(),
      createdBy: {
        name: user.data.name,
        email: user.data.emailId,
      },
      approved: false,
    };

    const addedBlog = await addTask(data);
    console.log(addedBlog);

    setBlogTitle("");
    setBlogUrl("");
    setPlatform("");
  };

  return (
    <>
      <div className="flex items-center gap-2 mt-4">
        <div className="w-full h-1 bg-yellow"></div>
        <p>Blog</p>
        <div className="h-1 bg-yellow w-7"></div>
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="blogUrl">
          Blog Url :{" "}
        </label>
        <input
          value={blogUrl}
          onChange={(e) => setBlogUrl(e.target.value)}
          className="flex-grow input-box"
          id="blogUrl"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="blogTitle">
          Blog Title :{" "}
        </label>
        <input
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          className="flex-grow input-box"
          id="blogTitle"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="platform">
          Platform :{" "}
        </label>
        <input
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="flex-grow input-box"
          id="platform"
          type="text"
        />
      </div>

      <button onClick={blogSubmitHandler} className="mt-6 button-primary">
        Submit Your Task
      </button>
    </>
  );
};

export default BlogInputs;
