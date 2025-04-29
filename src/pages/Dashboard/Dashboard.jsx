import React, { useState } from "react";
import Section1 from "../../component/section_1_dashbord/section1";
import Section2 from "../../component/section_2_dashbord/Section2";
import Section3 from "../../component/section_3_dashbord/Section3";
import Sidebar2 from "../../component/Sidebar2/Sidebar2";
import "./Dashboard.css";
export default function Dashboard() {
  return (
    <div className="container">
      <Sidebar2/>
      <div className="row mt-5">
        <Section1></Section1>
      </div>
      <div className="row mt-5">
        <Section2></Section2>
      </div>
      <div className="row mt-5">
        <Section3></Section3>
      </div>
    </div>
  );
}
