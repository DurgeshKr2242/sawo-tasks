import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { approvePost } from "../../../apis";
import { useGlobalAuthContext } from "../../../AuthContext";

const BlogApprove = ({ post }) => {
  const [points, setPoints] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useGlobalAuthContext();
  const router = useRouter();

  const approvePostHandler = async (postId, userId, points) => {
    setLoading(true);
    try {
      if (!points) {
        throw "Please enter valid points";
      }
      console.log(postId, userId, points);
      await approvePost(postId, userId, points);
      toast("Approved! Points alloted", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.reload();
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
    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full gap-4 px-3 py-2 border-2 rounded-lg border-yellow">
      <div className="flex justify-between">
        <p>
          By : {post.data.createdBy.name} ({post.data.createdBy.champType})
        </p>
        <div className="flex items-center gap-2">
          <label>Points : </label>
          <input
            onChange={(e) => setPoints(e.target.value)}
            value={points}
            type="number"
            className="px-2 border-b-2 max-w-[60px] border-yellow"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <p>Tile:{post.data.Blog.blogTitle}</p>
        <p>
          Live :{" "}
          <Link href={post.data.Blog.blogUrl}>
            <a
              target="_blank"
              className="underline underline-offset-1 decoration-2 decoration-indigo-500 "
            >
              Click Here
            </a>
          </Link>
        </p>
        <p>Platform : {post.data.Blog.platform}</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          disabled={loading ? true : false}
          // onClick={() => approvePost(post.id, user.id, points)}
          onClick={() =>
            approvePostHandler(post.id, post.data.createdBy.creatorId, points)
          }
          className="button-primary"
        >
          Approve
        </button>
        <div className="flex flex-col text-sm text-right">
          <p> {post.data.timestamp.toDate().toDateString("en-US")}</p>
          <p className="text-xs">
            {post.data.timestamp.toDate().toLocaleTimeString("en-US")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogApprove;
