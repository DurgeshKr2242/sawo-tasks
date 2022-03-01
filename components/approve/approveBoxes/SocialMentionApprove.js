import React, { useEffect, useState } from "react";
import Link from "next/link";

import { approvePost } from "../../../apis";
import { useGlobalAuthContext } from "../../../AuthContext";

const SocialMentionApprove = ({ post }) => {
  const [points, setPoints] = useState("");
  const { user } = useGlobalAuthContext();
  // const approveHandler = async (taskId, userId, points) => {
  // approvePost(taskId, userId, points)
  // };

  return (
    <>
      {/* {allPendingSocialMention.map((post) => {
        return ( */}
      <div
        key={post.id}
        className="flex flex-col w-full gap-4 px-3 py-2 mt-6 border-2 rounded-lg border-yellow"
      >
        <div className="flex justify-between">
          <p>By : {post.data.createdBy.name} (Developer)</p>
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

        <div className="flex flex-col gap-4">
          {!!post.data.SocialMention.linkedIn.linkedInUrl && (
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 mt-4">
                <div className="w-full h-[0.5px] bg-yellow"></div>
                <p>LinkedIn</p>
                <div className="h-[0.5px] bg-yellow w-7"></div>
              </div>
              <div>
                <p className="flex gap-2">
                  Url:
                  <Link href={post.data.SocialMention.linkedIn.linkedInUrl}>
                    <a
                      target="_blank"
                      className="underline underline-offset-1 decoration-2 decoration-indigo-500 "
                    >
                      Click Here
                    </a>
                  </Link>
                </p>
                <p>
                  Reaction :{post.data.SocialMention.linkedIn.linkedInReactions}
                </p>
                <p>
                  Comments :{post.data.SocialMention.linkedIn.linkedInComment}
                </p>
                <p>Viewes : {post.data.SocialMention.linkedIn.linkedInViews}</p>
              </div>
            </div>
          )}

          {!!post.data.SocialMention.twitter.twitterUrl && (
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 mt-4">
                <div className="w-full h-[0.5px] bg-yellow"></div>
                <p>Twitter</p>
                <div className="h-[0.5px] bg-yellow w-7"></div>
              </div>
              <div>
                <p className="flex gap-2">
                  Url:
                  <Link href={post.data.SocialMention.twitter.twitterUrl}>
                    <a
                      target="_blank"
                      className="underline underline-offset-1 decoration-2 decoration-indigo-500 "
                    >
                      Click Here
                    </a>
                  </Link>
                </p>
                <p>Likes : {post.data.SocialMention.twitter.twitterLikes}</p>
                <p>
                  Comments :{post.data.SocialMention.twitter.twitterComments}
                </p>
                <p>
                  Other Insights :
                  {post.data.SocialMention.twitter.twitterOtherInsights}
                </p>
              </div>
            </div>
          )}
          {!!post.data.SocialMention.instagram.instaUrl && (
            <div className="flex flex-col gap-1 text-sm">
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-full h-[0.5px] bg-yellow"></div>
                  <p>Instagram</p>
                  <div className="h-[0.5px] bg-yellow w-7"></div>
                </div>
                <div>
                  <p className="flex gap-2">
                    Url:
                    <Link href={post.data.SocialMention.instagram.instaUrl}>
                      <a
                        target="_blank"
                        className="underline underline-offset-1 decoration-2 decoration-indigo-500 "
                      >
                        Click Here
                      </a>
                    </Link>
                  </p>
                  <p>Likes : {post.data.SocialMention.instagram.instaLikes}</p>
                  <p>
                    Comments :{post.data.SocialMention.instagram.instaComments}
                  </p>
                  <p>
                    Other Insights :
                    {post.data.SocialMention.instagram.instaOtherInsights}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() =>
              approvePost(post.id, user.id, points).then((res) =>
                console.log(res)
              )
            }
            // onClick={() => console.log(post.id, user.id, points)}
            className="button-primary"
          >
            Approve
          </button>
          <p className="text-right">22/12/2022, 12pm</p>
        </div>
      </div>
      {/* );
      })} */}
    </>
    // <div className="flex flex-col w-full gap-4 px-3 py-2 border-2 rounded-lg border-yellow">
    //   <div className="flex justify-between">
    //     <p>By : Durgesh Kumar (Developer)</p>
    //     <p>Points : ______</p>
    //   </div>

    //   <div className="flex flex-col gap-4">
    //     <div className="flex flex-col gap-2 text-sm">
    //       <div className="flex items-center gap-2 mt-4">
    //         <div className="w-full h-[0.5px] bg-yellow"></div>
    //         <p>LinkedIn</p>
    //         <div className="h-[0.5px] bg-yellow w-7"></div>
    //       </div>
    //       <div>
    //         <p>Url: Click Here</p>
    //         <p>Reaction : 212</p>
    //         <p>Comments : 55</p>
    //         <p>Viewes : 212</p>
    //       </div>
    //     </div>

    //     <div className="flex flex-col gap-2 text-sm">
    //       <div className="flex items-center gap-2 mt-4">
    //         <div className="w-full h-[0.5px] bg-yellow"></div>
    //         <p>Twitter</p>
    //         <div className="h-[0.5px] bg-yellow w-7"></div>
    //       </div>
    //       <div>
    //         <p>Url: Click Here</p>
    //         <p>Likes : 212</p>
    //         <p>Comments : 55</p>
    //         <p>
    //           Other Insights : Lorem ipsum dolor sit amet consectetur
    //           adipisicing elit. Inventore eligendi in
    //         </p>
    //       </div>
    //     </div>

    //     <div className="flex flex-col gap-1 text-sm">
    //       <div className="flex flex-col gap-2 text-sm">
    //         <div className="flex items-center gap-2 mt-4">
    //           <div className="w-full h-[0.5px] bg-yellow"></div>
    //           <p>Instagram</p>
    //           <div className="h-[0.5px] bg-yellow w-7"></div>
    //         </div>
    //         <div>
    //           <p>Url: Click Here</p>
    //           <p>Likes : 212</p>
    //           <p>Comments : 55</p>
    //           <p>
    //             Other Insights : Lorem ipsum dolor sit amet consectetur
    //             adipisicing elit. Inventore eligendi in
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex items-center justify-between">
    //     <button className="button-primary">Approve</button>
    //     <p className="text-right">22/12/2022, 12pm</p>
    //   </div>
    // </div>
  );
};

export default SocialMentionApprove;
