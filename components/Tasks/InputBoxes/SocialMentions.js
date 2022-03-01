import React, { useState } from "react";
import { Firestore, serverTimestamp } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";

import { addTask } from "../../../apis";
import { useGlobalAuthContext } from "../../../AuthContext";
const SocialMentions = () => {
  const { user } = useGlobalAuthContext();
  const [loading, setLoading] = useState(false);

  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [linkedInComment, setLinkedInComment] = useState(null);
  const [linkedInViews, setLinkedInViews] = useState(null);
  const [linkedInReactions, setLinkedInReactions] = useState(null);
  const [twitterUrl, setTwitterUrl] = useState("");
  const [twitterLikes, setTwitterLikes] = useState(null);
  const [twitterComments, setTwitterComments] = useState(null);
  const [twitterOtherInsights, setTwitterOtherInsights] = useState("");
  const [instaUrl, setInstaUrl] = useState("");
  const [instaLikes, setInstaLikes] = useState(null);
  const [instaComments, setInstaComments] = useState(null);
  const [instaOtherInsights, setInstaOtherInsights] = useState("");

  const socialMentionsSubmitHandler = async () => {
    setLoading(true);

    const data = {
      taskType: "SocialMentions",
      SocialMention: {
        linkedIn: {
          linkedInUrl,
          linkedInComment,
          linkedInViews,
          linkedInReactions,
        },
        twitter: {
          twitterUrl,
          twitterLikes,
          twitterComments,
          twitterOtherInsights,
        },
        instagram: {
          instaUrl,
          instaLikes,
          instaComments,
          instaOtherInsights,
        },
      },
      points: 0,
      timestamp: Timestamp.now(),
      createdBy: {
        name: user.data.name,
        email: user.data.emailId,
      },
      approved: false,
    };

    try {
      if (!twitterUrl && !linkedInUrl && !instaUrl) {
        throw "Please enter your posts link";
      }
      const addedSocialMention = await addTask(data);
      console.log(addedSocialMention);
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

    setLinkedInUrl("");
    setLinkedInComment("");
    setLinkedInViews("");
    setLinkedInReactions("");
    setTwitterUrl("");
    setTwitterLikes("");
    setTwitterComments("");
    setTwitterOtherInsights("");
    setInstaUrl("");
    setInstaLikes("");
    setInstaComments("");
    setInstaOtherInsights("");

    setLoading(false);
  };

  return (
    <>
      {/* LinkedIn Starts */}
      <div className="flex items-center gap-2 mt-4">
        <div className="w-full h-1 bg-yellow"></div>
        <p>LinkedIn</p>
        <div className="h-1 bg-yellow w-7"></div>
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="LinkedInUrl">
          Post Url :{" "}
        </label>
        <input
          value={linkedInUrl}
          onChange={(e) => setLinkedInUrl(e.target.value)}
          className="flex-grow input-box"
          id="LinkedInUrl"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="PostViewes">
          Viewes :{" "}
        </label>
        <input
          value={linkedInViews}
          onChange={(e) => setLinkedInViews(e.target.value)}
          className="flex-grow input-box"
          id="PostViewes"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="Comments">
          Comments :{" "}
        </label>
        <input
          value={linkedInComment}
          onChange={(e) => setLinkedInComment(e.target.value)}
          className="flex-grow input-box"
          id="Comments"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="Reaction">
          Reactions :{" "}
        </label>
        <input
          value={linkedInReactions}
          onChange={(e) => setLinkedInReactions(e.target.value)}
          className="flex-grow input-box"
          id="Reactions"
          type="text"
        />
      </div>

      {/* Twitter Starts */}

      <div className="flex items-center gap-2 mt-12">
        <div className="w-full h-1 bg-yellow"></div>
        <p>Twitter</p>
        <div className="h-1 bg-yellow w-7"></div>
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="TwitterUrl">
          Post Url :{" "}
        </label>
        <input
          value={twitterUrl}
          onChange={(e) => setTwitterUrl(e.target.value)}
          className="flex-grow input-box"
          id="TwitterUrl"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="TwitterLikes">
          Likes :{" "}
        </label>
        <input
          value={twitterLikes}
          onChange={(e) => setTwitterLikes(e.target.value)}
          className="flex-grow input-box"
          id="TwitterLikes"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="TwitterComments">
          Comments :{" "}
        </label>
        <input
          value={twitterComments}
          onChange={(e) => setTwitterComments(e.target.value)}
          className="flex-grow input-box"
          id="TwitterComments"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="TwitterOtherInsights">
          OtherInsights :{" "}
        </label>
        <input
          value={twitterOtherInsights}
          onChange={(e) => setTwitterOtherInsights(e.target.value)}
          className="flex-grow input-box"
          id="TwitterOtherInsights"
          type="text"
        />
      </div>
      {/* Instagram Starts */}

      <div className="flex items-center gap-2 mt-12">
        <div className="w-full h-1 bg-yellow"></div>
        <p>Instagram</p>
        <div className="h-1 bg-yellow w-7"></div>
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="InstaUrl">
          Post Url :{" "}
        </label>
        <input
          value={instaUrl}
          onChange={(e) => setInstaUrl(e.target.value)}
          className="flex-grow input-box"
          id="InstaUrl"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="InstaLikes">
          Likes :{" "}
        </label>
        <input
          value={instaLikes}
          onChange={(e) => setInstaLikes(e.target.value)}
          className="flex-grow input-box"
          id="InstaLikes"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="InstaComments">
          Comments :{" "}
        </label>
        <input
          value={instaComments}
          onChange={(e) => setInstaComments(e.target.value)}
          className="flex-grow input-box"
          id="InstaComments"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mobile-l:flex-row">
        <label className="min-w-[135px]" htmlFor="InstaOtherInsights">
          OtherInsights :{" "}
        </label>
        <input
          value={instaOtherInsights}
          onChange={(e) => setInstaOtherInsights(e.target.value)}
          className="flex-grow input-box"
          id="InstaOtherInsights"
          type="text"
        />
      </div>

      <button
        disabled={loading ? true : false}
        onClick={socialMentionsSubmitHandler}
        className="mt-6 button-primary"
      >
        Submit Your Task
      </button>
    </>
  );
};

export default SocialMentions;
