import React, { useState } from "react";

const ProjectApprove = () => {
  const [points, setPoints] = useState("");
  return (
    <div className="flex flex-col w-full gap-4 px-3 py-2 border-2 rounded-lg border-yellow">
      <div className="flex justify-between">
        <p>By : Durgesh Kumar (Developer)</p>
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
      <div className="flex flex-col gap-1 text-sm">
        <p>Name: Subsciption Tracker</p>
        <p>Live : Click Here</p>
        <p>GitHub Url : Click Here</p>
        <p>
          About : <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni,
          ratione sapiente velit mollitia similique nobis magnam repellat vero
          voluptatem.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button className="button-primary">Approve</button>
        <p className="text-right">22/12/2022, 12pm</p>
      </div>
    </div>
  );
};

export default ProjectApprove;
