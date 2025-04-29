import React from "react";
import Section1 from "../../component/section_1_tejarat/Section1";
import Sidebar2 from "../../component/Sidebar2/Sidebar2";
import Section2 from "../../component/section_2_tejarat/Section2";
export default function Tejarat() {
  return (
    <div className="container">
      <Sidebar2/>
      <div className="row mt-5">
        <Section1 />
      </div>
      <div className="row mt-5">
        <Section2 />
      </div>
    </div>
  );
}
