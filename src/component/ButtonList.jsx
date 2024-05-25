import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const lists = ["All", "Live", "Song", "Gaming", "Cricket", "News", "Cookies", "Gaming", "Cricket", "News", "Cookies", "Gaming", "Cricket", "News", "Cookies"];
  return (
    <div className="flex">
      {lists.map((list, i) => {
        return <Button name={list} key={i + 1} />;
      })}
    </div>
  );
};

export default ButtonList;
