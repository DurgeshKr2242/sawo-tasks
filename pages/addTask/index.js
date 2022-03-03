import React, { useEffect } from "react";

import MainInputArea from "../../components/Tasks/MainInputArea";
import { getAllTasks } from "../../apis";
import { getAllPendingSocialMentions } from "../../apis";
const AddTask = () => {
  return (
    <div className="flex justify-center w-full ">
      <div className="flex flex-col w-full max-w-xl px-4 labtop:px-2">
        <MainInputArea />
      </div>
    </div>
  );
};

export default AddTask;
