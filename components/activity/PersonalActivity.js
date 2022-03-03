import React from "react";
import SingleActivity from "./SingleActivity";

const PersonalActivity = ({ userActivity }) => {
  return (
    <>
      {userActivity.map((data, i) => {
        return <SingleActivity key={i} data={data} />;
      })}
      {/* <SingleActivity />
      <SingleActivity />
      <SingleActivity /> */}
    </>
  );
};

export default PersonalActivity;
