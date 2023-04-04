import React from "react";
import Glow from "./Glow";

// 스크롤 컴포넌트

const BackGround = ({
  children,
  touchStartHandler,
  touchMoveHandler,
  touchEndHandler,
}: any) => {
  return (
    <div
      onTouchEnd={touchEndHandler}
      onTouchStart={(e) => touchStartHandler(e.touches[0].clientY)}
      onTouchMove={(e) => touchMoveHandler(e.touches[0].clientY)}
      className="min-w-screen flex min-h-screen items-center justify-center bg-gray-950 object-center"
    >
      {children}
    </div>
  );
};

export default BackGround;
