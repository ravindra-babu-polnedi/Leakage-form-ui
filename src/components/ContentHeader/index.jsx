import React from "react";
import "./index.css";
import { RiSettings3Fill } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";

const ContentHeader = () => {
  return (
    <div className="content-header">
        <div className="forms">Forms</div>
      <div className="icon-container">
        <div className="icon-1">
          <MdNotificationsActive />
        </div>
        <div className="icon-2">
          <RiSettings3Fill
            style={{ fontSize: "1.5em", fontWeight: "bold" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
