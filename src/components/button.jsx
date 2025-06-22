import React from "react";

const Button = ({ ButtonName, otherStyles }) => {
  return (
    <div>
      <button className={` p-3 rounded-xl hover:cursor-pointer hover:bg-gold duration-300 ${otherStyles}`}>
        {ButtonName}
      </button>
    </div>
  );
};

export default Button;
