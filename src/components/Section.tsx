import React from "react";

const Section = ({ children, title }: any) => {
  return (
    <div className="sectionContainer">
      <div className="titleContainer">
        <div className="glowing-txt temp">{title}</div>
      </div>

      <div className="sectionPart">{children}</div>
    </div>
  );
};

export default Section;
