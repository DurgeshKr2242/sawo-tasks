import React from "react";
import SingleActivity from "./SingleActivity";
const GlobalActivity = ({ globalActivity }) => {
  return (
    <>
      {globalActivity.map((data) => {
        return <SingleActivity data={data} />;
      })}
      {/* <SingleActivity />
      <SingleActivity />
      <SingleActivity /> */}
    </>
  );
};

export default GlobalActivity;
