import React, { useState } from "react";
import styled from "styled-components";
import ReactIcon from "../icons/ReactIcon";
import NextjsIcon from "../icons/NextjsIcon";
import ReactQueryIcon from "../icons/ReactQueryIcon";
import Recoil from "../icons/recoil-icon";
import StyledComponentsIcon from "../icons/StyledComponentsIcon";
import TailwindIcon from "../icons/TailWindIcon";
import { skillDes as data } from "@/constants";

const Skill = () => {
  const [show, setShow] = useState(1);

  const onClickHandler = (index: number) => {
    setShow(index);
  };

  return (
    <ConTainer>
      <Icons>
        <Icon color={"#38BDF8"} onClick={() => onClickHandler(1)}>
          <ReactIcon height="3rem" width="3rem" />
        </Icon>

        <Icon color="#252525" onClick={() => onClickHandler(2)}>
          <NextjsIcon height="3rem" width="3rem" />
        </Icon>

        <Icon color="#F73F51" onClick={() => onClickHandler(3)}>
          <ReactQueryIcon height="3rem" width="3rem" />
        </Icon>

        <Icon color="#3578E5" onClick={() => onClickHandler(4)}>
          <Recoil height="3rem" width="3rem" />
        </Icon>

        <Icon color="#363636" onClick={() => onClickHandler(5)}>
          <StyledComponentsIcon height="3rem" width="3rem" />
        </Icon>

        <Icon color="#38BDF8" onClick={() => onClickHandler(6)}>
          <TailwindIcon height="3rem" width="3rem" />
        </Icon>
      </Icons>

      <Content>{data[show]}</Content>
    </ConTainer>
  );
};

export default Skill;

const ConTainer = styled.div`
  background-color: #151515;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  padding: 0 12px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
`;

const Icon = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: white;
  margin: 4px;
  background-color: ${(props) => props.color};
  height: 5rem;
  width: 5rem;

  transition: all 0.15s ease-in-out;

  &:hover {
    scale: 1.15;
    & > * {
      transition: all 0.15s ease-in-out;
      scale: 1.05;
    }
  }

  @media only screen and (max-width: 600px) {
    height: 3rem;
    width: 3rem;

    & > * {
      height: 2rem;
      width: 2rem;
    }
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  line-height: 18px;
  max-width: 650px;
  height: 10rem;
  word-wrap: break-word;
`;
