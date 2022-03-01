import React from "react";
import MainApproveArea from "../../components/approve/MainApproveArea";
const Approve = () => {
  return (
    <div className="flex justify-center w-full ">
      <div className="flex flex-col w-full max-w-xl px-4 labtop:px-2">
        <MainApproveArea />
      </div>
    </div>
  );
};

export default Approve;
