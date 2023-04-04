import React from "react";
import "./glow.module.css";

const Glow = ({ click }: any) => {
  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center  object-center">
      <button className="glowing-btn" onClick={() => click("ArrowDown")}>
        <span className="glowing-txt">프론트엔드 김상표</span>
        <span className="glowing-txt">
          C<span className="faulty-letter">L</span>
          ICK
        </span>
      </button>
    </div>
  );
};

export default Glow;
