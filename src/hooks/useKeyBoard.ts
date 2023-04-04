import { MAX_PAGES } from "@/constants";
import React, { useEffect, useState } from "react";

// 0부터

const useKeyBoard = () => {
  const [first, setFirst] = useState(0);
  const [pagination, setPagination] = useState(0);

  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);

  const down = () => {
    setFirst((prev: any) => {
      if (prev / window.innerHeight <= -MAX_PAGES) return prev;
      return prev - window.innerHeight;
    });
    setPagination((prev) => prev + 1);
  };
  const up = () => {
    setFirst((prev: any) => {
      if (prev === 0) return prev;

      return prev + window.innerHeight;
    });
    setPagination((prev) => prev - 1);
  };

  const onKeyDownHandler = (e: string) => {
    if (e === "ArrowDown" || e === "KeyS") {
      setButton3(true);
      down();
    } else if (e === "ArrowRight" || e === "KeyD") {
      down();
      setButton4(true);
    } else if (e === "ArrowLeft" || e === "KeyA") {
      up();
      setButton2(true);
    } else if (e === "ArrowUp" || e === "KeyW") {
      up();
      setButton1(true);
    }
  };

  const onKeyUpHandler = (e: string) => {
    if (e === "ArrowDown" || e === "KeyS") setButton3(false);
    else if (e === "ArrowRight" || e === "KeyD") setButton4(false);
    else if (e === "ArrowLeft" || e === "KeyA") setButton2(false);
    else if (e === "ArrowUp" || e === "KeyW") setButton1(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => onKeyDownHandler(e.code));
    window.addEventListener("keyup", (e) => onKeyUpHandler(e.code));

    return () => {
      window.removeEventListener("keydown", (e) => onKeyDownHandler(e.code));
      window.removeEventListener("keyup", (e) => onKeyUpHandler(e.code));
    };
  }, []);

  return {
    first,
    onKeyDownHandler,
    onKeyUpHandler,
    pagination,
    button1,
    button2,
    button3,
    button4,
    up,
    down,
  };
};

export default useKeyBoard;
