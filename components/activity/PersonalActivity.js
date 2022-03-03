import React from "react";
import SingleActivity from "./SingleActivity";

const PersonalActivity = ({ userActivity }) => {
  return (
    <>
      {userActivity.map((data) => {
        return <SingleActivity data={data} />;
      })}
      {/* <SingleActivity />
      <SingleActivity />
      <SingleActivity /> */}
    </>
  );
};

export default PersonalActivity;
