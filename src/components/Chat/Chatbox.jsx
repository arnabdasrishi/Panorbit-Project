import React from "react";
import { BsChatLeft } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io"
import "../../index.css";

const Chatbox = () => {
  return (
    <div className="chatbox__main">
      <div className="chatobx__main__text">
        <BsChatLeft />
        <h3> Chats</h3>
      </div>
      <h3><IoIosArrowUp /></h3>
    </div>
  );
};

export default Chatbox;
