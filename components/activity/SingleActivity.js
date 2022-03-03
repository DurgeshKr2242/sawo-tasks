import React, { useState } from "react";
import { SiNextcloud } from "react-icons/si";
import { BiCode } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { MdPendingActions } from "react-icons/md";

const SingleActivity = ({ data }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-4 -ml-1 ">
        <SiNextcloud />{" "}
        <div>
          <p> {data.data.timestamp.toDate().toDateString("en-US")}</p>
          <p className="text-xs">
            {data.data.timestamp.toDate().toLocaleTimeString("en-US")}
          </p>
        </div>
      </div>
      <div className="w-full border-l-2 border-tWhiteSec/20">
        <div
          className="tabletS:ml-8 -ml-4  border-[1px] border-tWhiteSec/20 bg-white rounded-lg px-6 py-4 mb-8 mt-4 
      max-w-[550px] w-full hover:bg-bgBlackSec cursor-pointer"
        >
          <div className="flex justify-between ">
            <div className="flex flex-col items-start gap-1 ">
              <div className="text-base tracking-wide uppercase text-tWhite">
                <p>{data.data.taskType}</p>
              </div>
              <div className="text-sm text-tWhiteSec">
                <p> -{data.data.createdBy.name}</p>
                <p className="text-xs italic">({data.data.createdBy.email})</p>
              </div>
            </div>
            {/* {details && ( */}
            <div className="flex flex-col items-center justify-between gap-2">
              <p className="rounded-full">
                {data.data.approved ? (
                  <TiTick className="text-xl text-green-500" />
                ) : (
                  <MdPendingActions className="text-xl text-orange-400" />
                )}
              </p>
              <p>{data.data.points}</p>
            </div>
            {/* )} */}
          </div>
          {detailsOpen && (
            <ul className="mt-4 text-sm list-disc list-inside font-extralight">
              <li>Details</li>
              <li>Details</li>
              <li>Details</li>
              <li>Details</li>
              <li>Details</li>
              <li>Details</li>
              {/* {details.map((detail, index) => {
                return (
                  <li
                    variants={{
                      hidden: {
                        y: -100,
                        opacity: 0,
                      },
                      visible: (i) => ({
                        y: 0,
                        opacity: 1,
                        transition: {
                          delay: index * 0.05,
                        },
                      }),
                    }}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    key={detail}
                  >
                    {detail}
                  </li>
                );
              })} */}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleActivity;
