import React, { useEffect, useState } from "react";

const MAX_PAGES = 4; // 0부터

const GlowKeyBoard = ({
  button1,
  button2,
  button3,
  button4,
  up,
  down,
}: any) => {
  return (
    <div className="keyBoardContainer">
      <div className="keyBoardRow">
        <button className={button1 ? "key onclick-active" : "key"}>↑</button>
      </div>

      <div className="keyBoardRow">
        <button className={button2 ? "key onclick-active" : "key"}>←</button>
        <button className={button3 ? "key onclick-active" : "key"}>↓</button>
        <button className={button4 ? "key onclick-active" : "key"}>→</button>
      </div>
    </div>
  );
};

export default GlowKeyBoard;
