import React from "react";

const Button = ({styles}) => {
  return (
    <button className={`${styles} bg-Bright_Cyan hover:bg-Lime_Green text-white rounded-[3rem] flex justify-center items-center max-h-[40px] px-4 py-2 `}>
      Request Invite
    </button>
  );
};

export default Button;
