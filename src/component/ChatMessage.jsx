import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm ">
      <img
        src="https://up.yimg.com/ib/th?id=OIP.k7dE2dftQijg3KbpTyIObAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
        alt="comment image"
        className="w-8 h-8 rounded-full"
      />
      <span className="font-bold px-1">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
