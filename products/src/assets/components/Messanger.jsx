import React from "react";
import SideBar from "./SideBar";
import ChatWindow from "./ChatWindow";
import "../styles/Messanger.css";

const Messanger = () => {
  return (
    <div className="messenger-container">
      <SideBar />
      <ChatWindow />
    </div>
  );
};

export default Messanger;