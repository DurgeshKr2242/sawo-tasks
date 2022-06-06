import React, { useEffect, useState } from "react";
import MainActivityArea from "../../components/activity/MainActivityArea";
import { getUserActivity, getGlobalActivity } from "../../apis";
import { useGlobalAuthContext } from "../../AuthContext";
// TODO: User Id is hard coded

const Activity = () => {
  const { user } = useGlobalAuthContext();

  const [userActivity, setUserActivity] = useState([]);
  const [globalActivity, setGlobalActivity] = useState([]);
  // if (user) {
  useEffect(() => {
    console.log(user?.id);
    getUserActivity(user?.id || "").then((posts) => {
      setUserActivity(posts);
      console.log(posts);
    });
    getGlobalActivity().then((posts) => {
      setGlobalActivity(posts);
      // console.log(posts);
    });
  }, [user]);
  // }

  return (
    <div className="flex justify-center w-full ">
      <div className="flex flex-col w-full max-w-xl px-4 labtop:px-2">
        <MainActivityArea
          userActivity={userActivity}
          globalActivity={globalActivity}
        />
      </div>
    </div>
  );
};

export default Activity;
