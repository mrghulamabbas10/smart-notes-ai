import React from "react"; 
import SiriOrb from "./SiriOrb";

const ChatAssistant = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SiriOrb
        size="256px"
        animationDuration={30}
       colors={{ bg: "#0f172a", c1: "#C7DAFF", c2: "#5C8FFF", c3: "#1E5EFF" }}
        className="drop-shadow-lg"
      />
    </div>
  );
};

export default ChatAssistant;
