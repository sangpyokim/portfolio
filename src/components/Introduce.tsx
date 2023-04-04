import React from "react";
import styled from "styled-components";
import GitHubIcon from "../icons/GithubIcon";
import SolvedACIcon from "../icons/SolvedACIcon";
import LeetCodeIcon from "../icons/LeetCodeIcon";
import BOJIcon from "../icons/BOJIcon";

const Introduce = () => {
  return (
    <div className="flex h-full flex-col items-start justify-center text-white">
      <div className=" text-whit my-2 text-base font-medium ">sangpyo kim</div>
      <div className="mb-1 bg-slate-900 p-1 text-4xl font-medium text-slate-50 ">
        동료들과 지식 공유, 적극적인 소통, 활발한 자기개발
      </div>
      <div className=" mb-2 text-left text-4xl font-medium">
        세 가지를 핵심가치로 생각합니다.
      </div>
      <div className=" text-xl font-medium">김상표</div>{" "}
      <div className=" text-base font-medium">
        순천대학교 컴퓨터공학과 졸업 (편입)
      </div>
      <Icons>
        <Icon
          color="#252525"
          onClick={() => window.open("https://github.com/sangpyokim", "_blank")}
        >
          <GitHubIcon width="1.5rem" height="1.5rem" />
        </Icon>

        <Icon
          color="#252525"
          onClick={() =>
            window.open("https://www.acmicpc.net/user/rlatkdvy12", "_blank")
          }
        >
          <BOJIcon width="1.5rem" height="1.5rem" />
        </Icon>

        <Icon
          color="#252525"
          onClick={() =>
            window.open("https://solved.ac/profile/rlatkdvy12", "_blank")
          }
        >
          <SolvedACIcon width="2rem" height="1.5rem" />
        </Icon>

        <Icon
          color="#252525"
          onClick={() =>
            window.open("https://leetcode.com/sangpyokim/", "_blank")
          }
        >
          <LeetCodeIcon width="1.5rem" height="1.5rem" />
        </Icon>
      </Icons>
    </div>
  );
};

export default Introduce;

const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
`;

const Icon = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: white;
  background-color: ${(props) => props.color};
  height: 2rem;
  width: 2rem;
  margin-right: 6px;

  transition: all 0.15s ease-in-out;

  &:hover {
    scale: 1.1;
    & > * {
      transition: all 0.15s ease-in-out;
      scale: 1.05;
    }
  }
`;
