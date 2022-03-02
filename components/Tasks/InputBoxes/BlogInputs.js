import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { serverTimestamp } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { addTask } from "../../../apis";
import { useGlobalAuthContext } from "../../../AuthContext";

const BlogInputs = () => {
  const { user } = useGlobalAuthContext();
  const [loading, setLoading] = useState(false);
  const [blogUrl, setBlogUrl] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [platform, setPlatform] = useState("");
  useEffect(() => {
    console.log(user);
  }, []);

  const blogSubmitHandler = async () => {
    setLoading(true);
    const data = {
      taskType: "Blog",
      Blog: {
        blogTitle,
        platform,
        blogUrl,
      },
      points: 0,
      timestamp: Timestamp.now(),
      createdBy: {
        name: user.data.name,
        email: user.data.emailId,
        champType: user.data.champType,
      },
      approved: false,
    };
    try {
      if (!blogUrl) {
        throw "Please enter a valid Blog Url";
      }
      const addedBlog = await addTask(data);
      console.log(addedBlog);
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

    setBlogTitle("");
    setBlogUrl("");
    setPlatform("");
    setLoading(false);
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

      <button
        disabled={loading ? true : false}
        onClick={blogSubmitHandler}
        className="mt-6 button-primary"
      >
        Submit Your Task
      </button>
    </>
  );
};

export default BlogInputs;
