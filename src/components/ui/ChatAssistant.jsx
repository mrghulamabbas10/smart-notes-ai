import React from "react"; 
import SiriOrb from "../smoothui/ui/SiriOrb";

const ChatAssistant = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SiriOrb
        size="256px"
        animationDuration={15}
        colors={{ bg: "#0f172a", c1: "#38bdf8", c2: "#818cf8", c3: "#a78bfa" }}
        className="drop-shadow-lg"
      />
    </div>
  );
};

export default ChatAssistant;
