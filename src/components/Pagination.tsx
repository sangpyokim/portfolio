import React from "react";
import styled, { keyframes } from "styled-components";

import { MAX_PAGES } from "../constants";

const Pagination = ({ page }: any) => {
  console.log(page);
  return (
    <Container>
      <ItemContainer>
        {Array(MAX_PAGES + 1)
          .fill(0)
          .map((v, i) => (
            <Item key={i} isPage={page === i}></Item>
          ))}
      </ItemContainer>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  color: black;
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 120px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 200px;
`;

const Item = styled.div<{ isPage: boolean }>`
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  scale: ${(props) => (props.isPage ? "1" : "0.3")};

  &:nth-child(1) {
    background: #ffff00;
    box-shadow: 0 0 30px #ffff00;
  }
  &:nth-child(2) {
    background: #76ff03;
    box-shadow: 0 0 30px #76ff03;
  }
  &:nth-child(3) {
    background: #f06292;
    box-shadow: 0 0 30px #f06292;
  }
  &:nth-child(4) {
    background: #4fc3f7;
    box-shadow: 0 0 30px #4fc3f7;
  }
  &:nth-child(5) {
    background: #ba68c8;
    box-shadow: 0 0 30px #ba68c8;
  }
`;

const grow = keyframes`
  0% , 40% , 100% {
    transform:scale(0.2);
  }
  20% {
    transform:scale(1);
  }
`;
