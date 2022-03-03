import React from "react";
import SingleActivity from "./SingleActivity";
const GlobalActivity = ({ globalActivity }) => {
  return (
    <>
      {globalActivity.map((data, i) => {
        return <SingleActivity key={i} data={data} />;
      })}
      {/* <SingleActivity />
      <SingleActivity />
      <SingleActivity /> */}
    </>
  );
};

export default GlobalActivity;
