import React, { useState } from "react";
import styled from "styled-components";
import styles from "./Outroduce.module.css";

const title = [
  ["교내 실험실", "2021.05"],
  ["동아리", "2022. 01"],
  ["인턴", "2022.03"],
  ["해커톤", "2022. 07"],
];
const data = [
  `교내 소프트웨어공학 실험실이란 실험실에 학부생 실험실장을 맡으면서 실험실 예산 관리, 장비 또는 소모품 구매, 실험실 안전 점검 등 실험실장의 역할을 잘 수행하였습니다. 다만 실험실의 교수님이 퇴직 무렵이라 연구 활동은 없었지만, 실험실 내 인원들과 실험실 게시판을 만들고 제 3회 4개 항만공사 아이디어 공모전에 나가 본선에 오르는 등 협업과 커뮤니케이션하는 능력을 길렀습니다.`,
  "멋쟁이사자처럼이라는 대학 연합 동아리는 중앙 본부에서 강의를 제공하고 각 대학에서 자체적으로 활동하는 동아리입니다. 순천대학교 운영진으로 참여하여 운영진들과 팀원을 뽑기위한 프로세스와 질문, 평가항목을 세워 면접을 보았습니다. 선발된 팀원과 운영진 1명이 한 팀을 이루고 팀원은 제공받은 강의를 학습하고 운영진은 팀원이 합류하기 전 미리 강의 수강하여 팀원의 학습을 이끌었습니다. 또한 자체 해커톤을 기획, 진행하여 팀원들이 배운 지식을 사용할 수 있도록 유도하였습니다. 누군가에게 지식을 전달하고 성장을 도움으로써 제 자신도 지식적으로 한단계 성장하고 지속적인 지식 공유를 해야겠다는 생각이 들었습니다.",
  "ICT학점연계인턴쉽 프로젝트라는 인턴쉽 제도가 있어 4학년 1학기에 프리것버드라는 회사의 웹팀에서 4개월간의 인턴을 진행했습니다. OOP, TypeScript, UML 다이어그램 작성, 코드분석, 발표, 과제 수행과 같은 경험을 하며 현업의 업무를 경험하고 업무 프로세스와 조직 문화를 이해하는 능력을 키웠습니다. hls.js를 사용하여 스트리밍서비스를 구현하는 과제를 진행하고 그 코드가 실제 회사의 프로젝트에 탑재되었을 때 끓어오르는 희열을 느꼈고 나도 개발자로써 도움이 될 수 있다는 자신감도 얻었습니다.",
  "21.08 해,커리어 해커톤 예선 진출, 21.07 오아시스해커톤 특별상 수상 경험에서 모두 프론트엔드 개발자로 참여하고 팀원들도 기획자 1, 디자이너 1, 다른 개발자 1로 구성되어 포스트 코로나 시대에 대학생들이 필요로하는 앱인 모임 어플리케이션, 전남의 문제상황을 해결할 수 있는 못난이 농산물 판매 플랫폼를 개발하며 기획자, 디자이너와의 소통과 다른 개발자들과의 협업을하는 경험을 했습니다. 이러한 경험을 바탕으로 업무를 보다 손쉽게 이해하고 빠르게 적응할 수 있으며, 다른 동료들과의 협업에서 성과를 보일 수 있고 본인이 맡은 담당 업무를 잘 수행할 수 있습니다.",
];

const Outroduce = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.swiper_container_wrapper} ${styles.swiper_container_wrapper__timeline}`}
      >
        <UL className={`${styles.swiper_pagination_custom}`}>
          {title.map((str, i) => (
            <List
              selected={index === i}
              key={i}
              onClick={() => setIndex(i)}
              className={`${styles.swiper_pagination_switch}`}
            >
              <Pre className={`${styles.switch_title}`}>
                <div>{title[i][0]}</div>
                <div>{title[i][1]}</div>
              </Pre>
            </List>
          ))}
        </UL>

        <div
          className={`${styles.swiper} ${styles.swiper_container} ${styles.swiper_container__timeline}`}
        >
          <div className={`${styles.swiper_wrapper}`}>
            <div className={`${styles.swiper_slide}`}>{data[index]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outroduce;

const UL = styled.div`
  display: flex;
  width: 100%;

  margin-bottom: 8px;
`;

const List = styled.li<{ selected: boolean }>`
  font-size: ${(props) => (props.selected ? "1rem" : "0.8rem")};
  color: ${(props) => (props.selected ? "#eee" : "#888")};

  @media only screen and (max-width: 600px) {
    font-size: ${(props) => (props.selected ? "0.8rem" : "0.6rem")};
  }
`;
const Pre = styled.div`
  line-height: 18px;
`;
