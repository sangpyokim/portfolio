import React from "react";

const Scroll = ({ children, first }: any) => {
  return (
    <div
      style={{
        position: "absolute",
        top: first,
        display: "flex",
        flexDirection: "column",
        transition: "all 0.5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
