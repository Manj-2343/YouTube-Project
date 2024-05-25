import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-2 m-2 rounded-lg bg-gray-200 font-medium">
        {name}
      </button>
    </div>
  );
};

export default Button;
