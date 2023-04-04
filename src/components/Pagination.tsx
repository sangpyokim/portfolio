import React from "react";
import styled, { keyframes } from "styled-components";

import { MAX_PAGES } from "../constants";

const colors = ["#ffff00", "#76ff03", "#f06292", "#4fc3f7", "#ba68c8"];

const Pagination = ({ page, goToPage }: any) => {
  return (
    <Container>
      <ItemContainer>
        {Array(MAX_PAGES + 1)
          .fill(0)
          .map((v, i) => (
            <ItemWrapper key={i} onClick={() => goToPage(i)}>
              <Item isPage={page === i} colors={colors[i]} />
            </ItemWrapper>
          ))}
      </ItemContainer>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  color: black;
  position: fixed;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 200px;
`;
const ItemWrapper = styled.div`
  width: 30px;
  height: 30px;

  &:hover {
    cursor: pointer;
    & > div {
      scale: 1;
      transition: all 0.1s ease-in-out;
    }
  }
`;

const Item = styled.div<{ isPage: boolean; colors: string }>`
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  scale: ${(props) => (props.isPage ? "1" : "0.3")};
  background: ${(props) => props.colors};
  box-shadow: 0 0 30px ${(props) => props.colors};
`;
