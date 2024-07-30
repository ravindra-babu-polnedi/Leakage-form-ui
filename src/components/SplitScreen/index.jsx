import React from "react";
import "./index.css";

const SplitScreen = ({ children }) => {
  return (
    <div className="split-screen">
      <div className="navigation">{children[0]}</div>
      <div className="content">{children[1]}</div>
    </div>
  );
};

export default SplitScreen;
