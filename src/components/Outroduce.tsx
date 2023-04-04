import React, { useState } from "react";
import styled from "styled-components";
import styles from "./Outroduce.module.css";

const title = [
  `교내 실험실
2021.05
`,
  `동아리
2022. 01
`,
  `인턴
2022.03
`,
  `해커톤
2022. 07
`,
  `느낀점`,
];
const data = [
  "교내 실험실에 학부생 실험실장을 맡으면서 실험실 예산 관리, 장비 및 소모품 구매, 실험실 안전 점검 등 실험실장의 역할을 잘 수행하였습니다.",
  "멋쟁이사자라는 외부동아리에서 운영진으로 참여하여 기획하고 진행하며 팀원들을 이끌어나가는 능력을 키웠습니다.",
  "인턴 경험을 통해현업의 업무를 경험하고 업무 프로세스와 조직 문화를 이해하는 능력을 키웠습니다.",
  "마지막으로 2회의 해커톤 참여와 1회의 수상의 경험에서 프론트엔드 개발자로 참여하고 팀원들과의 협업 능력과 문제 해결 능력을 키웠습니다.",
  "이러한 경험을 바탕으로 업무를 보다 손쉽게 이해하고 빠르게 적응할 수 있으며, 다른 동료들과의 협업에서 성과를 보일 수 있고 본인이 맡은 담당 업무를 잘 수행할 수 있습니다.",
];

const Outroduce = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.swiper_container_wrapper} ${styles.swiper_container_wrapper__timeline}`}
      >
        <ul className={`${styles.swiper_pagination_custom}`}>
          {title.map((str, i) => (
            <List
              selected={index === i}
              key={i}
              onClick={() => setIndex(i)}
              className={`${styles.swiper_pagination_switch}`}
            >
              <Pre className={`${styles.switch_title}`}>{title[i]}</Pre>
            </List>
          ))}
        </ul>

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

const List = styled.ul<{ selected: boolean }>`
  font-size: ${(props) => (props.selected ? "16px" : "14px")};
  color: ${(props) => (props.selected ? "#eee" : "#888")};
`;
const Pre = styled.pre`
  line-height: 16px;
`;
