// 헤더
//  링크, 아이콘
// 본문 (스크롤)
//  간단한 자기 소개
//  학력, 기술, 수상, 경력, 프로젝트, 대외활동

import GlowKeyBoard from "@/components/GlowKeyBoard";
import Pagination from "@/components/Pagination";
import Section from "@/components/Section";
import BackGround from "@/layout/BackGround";
import Glow from "@/layout/Glow";
import Scroll from "@/layout/Scroll";

import Skill from "@/components/Skill";
import Introduce from "@/components/Introduce";
import Projects from "@/components/Projects";
import Outroduce from "@/components/Outroduce";
import useKeyBoard from "@/hooks/useKeyBoard";

export default function Home() {
  const {
    first,
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
  } = useKeyBoard();

  return (
    <BackGround
      touchStartHandler={touchStartHandler}
      touchMoveHandler={touchMoveHandler}
      touchEndHandler={touchEndHandler}
    >
      <Scroll first={first}>
        <GlowKeyBoard
          button1={button1}
          button2={button2}
          button3={button3}
          button4={button4}
          up={up}
          down={down}
        />

        <Pagination page={pagination} goToPage={goToPage} />

        <Glow click={down} />

        <Section title="자기소개">
          <Introduce />
        </Section>

        <Section title="기술스택">
          <Skill />
        </Section>

        <Section title="프로젝트">
          <Projects />
        </Section>

        <Section title="대외활동">
          <Outroduce />
        </Section>
      </Scroll>
    </BackGround>
  );
}
