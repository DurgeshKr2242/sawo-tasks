import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { useGlobalAuthContext } from "../../AuthContext";
import Link from "next/link";

// TODO: Comditional rendering if the user is an admin or not

const Navbar = () => {
  const router = useRouter();
  const { user } = useGlobalAuthContext();
  const [showMenue, setShowMenue] = useState(false);

  return (
    <div key="help" className="flex justify-center w-full">
      <div className="relative flex items-center justify-between w-full px-6 py-6 text-sm font-bold max-w-7xl labtop:px-2">
        <div>
          <h1 className="text-lg">SAWOTasks</h1>
        </div>

        <div className="items-center hidden gap-16 tablet:flex">
          <ul className="flex gap-5">
            {user && (
              <li
                onClick={() => router.push("/addTask")}
                className="relative cursor-pointer group"
              >
                Add Task
                <div className="absolute w-0 h-1 transition-all duration-300 -bottom-1 bg-yellow group-hover:w-full"></div>
              </li>
            )}
            <li
              onClick={() => router.push("/leaderboard")}
              className="relative cursor-pointer group "
            >
              Leaderbord
              <div className="absolute w-0 h-1 transition-all duration-300 -bottom-1 bg-yellow group-hover:w-full"></div>
            </li>
            {user?.data.isAdmin && (
              <li
                onClick={() => router.push("/approve")}
                className="relative cursor-pointer group"
              >
                Approve
                <div className="absolute w-0 h-1 transition-all duration-300 -bottom-1 bg-yellow group-hover:w-full"></div>
              </li>
            )}
            <Link
              href={
                "https://longhaired-work-e70.notion.site/SAWO-Champ-Scoring-Schema-Cohort-2-c6d8f7f2271a4ca482673a5b8afffbac"
              }
            >
              <a target="_blank">
                <li className="relative cursor-pointer group">
                  Scoring Schema
                  <div className="absolute w-0 h-1 transition-all duration-300 -bottom-1 bg-yellow group-hover:w-full"></div>
                </li>
              </a>
            </Link>
          </ul>

          <div className="flex gap-5 ">
            <button
              onClick={() => router.push("/activity")}
              className="button-secondary"
            >
              Activity
            </button>
            {user?.id ? (
              <button
                onClick={() => {
                  localStorage.removeItem("sawoPayload");
                  router.reload(window.location.pathname);
                }}
                className="button-primary"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => router.push("/auth/login")}
                className="button-primary"
              >
                Login
              </button>
            )}
          </div>
        </div>
        <GoThreeBars
          onClick={() => setShowMenue(!showMenue)}
          className="flex text-3xl cursor-pointer text-yellow tablet:hidden"
        />

        {showMenue && (
          <ul className="absolute left-0 right-0 flex flex-col items-center w-screen gap-3 pb-12 bg-white shadow-md -bottom-56">
            <li
              onClick={() => router.push("/addTask")}
              className="relative cursor-pointer group"
            >
              Add Task
              <div className="absolute w-0 h-1 transition-all duration-300 -bottom-1 bg-yellow group-hover:w-full"></div>
            </li>
            <li
              onClick={() => router.push("/leaderboard")}
              className="relative cursor-pointer group "
            >
              Leaderbord
              <div className="absolute w-0 h-1 transition-all duration-300 -bottom-1 bg-yellow group-hover:w-full"></div>
            </li>
            <li
              onClick={() => router.push("/approve")}
              className="relative cursor-pointer group"
            >
              Approve
              <div className="absolute w-0 h-1 transition-all duration-300 -bottom-1 bg-yellow group-hover:w-full"></div>
            </li>
            <li className="relative cursor-pointer group">
              Scoring Schema
              <div className="absolute w-0 h-1 transition-all duration-300 -bottom-1 bg-yellow group-hover:w-full"></div>
            </li>
            {/* </ul> */}
            <div className="flex mt-4">
              {user ? (
                <button
                  onClick={() => {
                    localStorage.removeItem("sawoPayload");
                    router.reload(window.location.pathname);
                  }}
                  className="button-primary"
                >
                  logout
                </button>
              ) : (
                <button
                  onClick={() => router.push("/auth/login")}
                  className="button-primary"
                >
                  Login
                </button>
              )}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
