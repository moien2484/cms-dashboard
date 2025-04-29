import React from "react";
import "./Section1.css";
import Chart5 from "../chart/Chart_5";
import Carousel from "../carousel/Carousel";
export default function Section1() {
  return (
    <>
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 align-self-center">
        <div className="parent-factor rounded">
          <div className="header-activity">
            <div className="parent-icon-setting">
              <i className="bx bx-cog bx-tada bx-rotate-90"></i>
            </div>
            <div>
              <h2>نمای کلی فاکتور</h2>
              <div className="sub-header">
                <h4>5,56548 تومان</h4>
                <i class="bx bx-left-top-arrow-circle bx-rotate-90"></i>
                <p>94 درصد بیشتر از سال گذشته</p>
              </div>
            </div>
          </div>
          <div className="body-factor">
            <Chart5 />
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
        <div className="prent-carousel rounded">
        <div className="header-carousel">
        <div className="header-activity">
            <div className="parent-icon-setting">
              <i className="bx bx-cog bx-tada bx-rotate-90"></i>
            </div>
            <div>
              <h2>فروشنده برتر</h2>
              <div className="sub-header">
                <h4> 845 فروشنده</h4>
                <i class="bx bx-left-top-arrow-circle bx-rotate-90"></i>
                <p> 86 درصد بیشتر از سال گذشته</p>
              </div>
            </div>
          </div>
        </div>
          <Carousel />
        </div>
      </div>
    </>
  );
}
