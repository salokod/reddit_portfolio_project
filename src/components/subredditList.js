import React from "react";
//redux
import { useDispatch } from "react-redux";
import { loadSubreddit } from "../actions/subredditAction";

const SubredditList = ({ category, displayName, imageSrc }) => {
  return (
    <div className="subredditList">
      <p>{category}</p>
    </div>
  );
};

export default SubredditList;
