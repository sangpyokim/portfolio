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

  const [touchY, setTouchY] = useState(0);
  const [touchY2, setTouchY2] = useState(0);

  let isScroll = false;

  const down = (num: number = 1) => {
    setFirst((prev: any) => {
      if (prev / window.innerHeight <= -MAX_PAGES) return prev;

      return prev - window.innerHeight * num;
    });
    setPagination((prev) => {
      if (prev >= MAX_PAGES) return prev;
      return prev + 1 * num;
    });
  };
  const up = (num: number = 1) => {
    setFirst((prev: any) => {
      if (prev >= 0) return prev;

      return prev + window.innerHeight * num;
    });

    setPagination((prev) => {
      if (prev <= 0) return prev;
      return prev - 1 * num;
    });
  };

  const goToPage = (num: number) => {
    setFirst(-(window.innerHeight * num));

    setPagination(num);
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

  const onWheelHandler = (e: number) => {
    if (isScroll) return;

    scrollHandler();

    if (e > 0) {
      onKeyDownHandler("KeyS");
      setTimeout(() => onKeyUpHandler("KeyS"), 100);
    } else if (e < 0) {
      onKeyDownHandler("KeyW");
      setTimeout(() => onKeyUpHandler("KeyW"), 100);
    }
  };
  const scrollHandler = () => {
    isScroll = true;
    setTimeout(() => {
      isScroll = false;
    }, 300);
  };

  const touchStartHandler = (y: number) => {
    setTouchY(y);
  };
  const touchMoveHandler = (y: number) => {
    setTouchY2(y);
  };
  const touchEndHandler = () => {
    const minus = touchY - touchY2;

    if (minus > -30) onKeyDownHandler("KeyS");
    else if (minus < 30) onKeyDownHandler("KeyW");
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => onKeyDownHandler(e.code));
    window.addEventListener("keyup", (e) => onKeyUpHandler(e.code));

    window.addEventListener("wheel", (e) => onWheelHandler(e.deltaY));

    return () => {
      window.removeEventListener("keydown", (e) => onKeyDownHandler(e.code));
      window.removeEventListener("keyup", (e) => onKeyUpHandler(e.code));
      // window.removeEventListener("wheel", (e) => onWheelHandler(e.deltaY));
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
    goToPage,
    touchStartHandler,
    touchMoveHandler,
    touchEndHandler,
  };
};

export default useKeyBoard;
