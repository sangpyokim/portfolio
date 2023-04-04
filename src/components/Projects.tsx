import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";

// icons
import GitHubIcon from "../icons/GithubIcon";
import VercelIcon from "../icons/VercelIon";
import PlayStoreIcon from "../icons/PlayStoreIcon";
import { colors, images, skillStack } from "@/constants";

const data = [
  `  Work Out 개인프로젝트 (23.01 ~ 23.03)
  자신의 타이머 사용기록을 남들과 공유하여 동기부여를 받는 서비스
  타이머를 사용하고 통계를 확인하고 그룹에 가입하여 소통하며
  자신의 통계와 남들의 통계를 비교하며 동기부여를 얻는다.
`,
];
// 깃허브 아이콘
// 안드로이드, 웹 배포 아이콘

const Projects = () => {
  const [index, setIndex] = useState(0);
  return (
    <Container>
      <GalleryContainer>
        <ImageGallery
          startIndex={0}
          items={images}
          useBrowserFullscreen={false}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
          showBullets={true}
          onSlide={(e) => setIndex(e)}
        />
      </GalleryContainer>

      {/* <IconTitle>바로가기</IconTitle> */}

      <Icons>
        <Icon
          color="#252525"
          onClick={() =>
            window.open(
              "https://github.com/sangpyokim/nextjs-workout",
              "_blank"
            )
          }
        >
          <GitHubIcon width="2rem" height="2rem" />
        </Icon>
        <Icon
          color="#252525"
          onClick={() => window.open("https://workout.works/", "_blank")}
        >
          <VercelIcon width="2rem" height="2rem" />
        </Icon>
        <Icon
          color="#252525"
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=app.vercel.nextjs_workout.twa",
              "_blank"
            )
          }
        >
          <PlayStoreIcon width="2rem" height="2rem" />
        </Icon>
      </Icons>

      <Stacks>
        {skillStack.map((str, i) => (
          <Stack key={i} color={colors[i]}>
            {str}
          </Stack>
        ))}
      </Stacks>
      <Description>{data[0]}</Description>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 18px;
  color: white;
  width: 100%;
`;

const GalleryContainer = styled.div`
  width: 30rem;
  margin-bottom: 12px;
`;
const Description = styled.pre`
  width: 33vw;
  text-align: start;
`;
const IconTitle = styled.span`
  display: flex;
  text-align: start;
  font-size: 12px;
  line-height: 14px;
`;
const Icons = styled.div`
  display: flex;
  margin-bottom: 4px;
`;
const Icon = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: white;
  margin: 4px;
  background-color: ${(props) => props.color};
  height: 2.5rem;
  width: 2.5rem;

  transition: all 0.15s ease-in-out;

  &:hover {
    scale: 1.15;
    cursor: pointer;
    & > * {
      transition: all 0.15s ease-in-out;
      scale: 1.05;
    }
  }
`;

const Stacks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 33vw;
  gap: 6px;
  color: white;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Stack = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 4px;
  height: 16px;
  padding: 0px 6px;
  font-size: 12px;
  line-height: 14px;
`;
