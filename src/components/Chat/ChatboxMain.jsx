import { useState } from "react";
import Chatbox from "./Chatbox";
import ActiveChatbox from "./ActiveChatbox";
import ShowChats from "./ShowChats";
import "../../index.css";

const ChatboxMain = () => {
  const [isActive, setisActive] = useState(false);
  const [showChat, setShowChat] = useState(true);

  function handleChat () {
    setShowChat(!showChat)
    console.log("balle balle");
  }
  return (
    <div
      className="chats__section"
      onClick={() => {
        setisActive(!isActive);
      }}
    >
      {showChat && isActive && (
        <ShowChats/>
      )}
      {isActive ? <ActiveChatbox/> : <Chatbox />}
    </div>
  );
};

export default ChatboxMain;
