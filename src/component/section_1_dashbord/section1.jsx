import React from 'react'
import "./section1.css"
import Example from '../chart/Chart_1'
export default function Section1() {
  return (
<>
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
          <div className="poster rounded col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <h1> خوش برگشتی جان !!</h1>
            <p>
              به خانواده ویحو خوش آمدید! خوشحالیم که از این داشبورد بازدید می
              کنید. ما خوشحال خواهیم شد که به شما در رشد کسب و کارتان کمک کنیم.
            </p>
            <a className="rounded" href="">
              به روزرسانی
            </a>
          </div>
          <div className="card-parent d-xl-flex d-lg-flex d-md-flex  mt-3">
            <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
              <div className="card-child-1  rounded">
                <div className="parent-icon-income">
                  <i class="bx bxl-xing"></i>
                </div>
                <p className="number-card-child">8.50.49</p>
                <p className="text-card-child">درآمد سالانه ی ما</p>
                <p className="w-100 incom">
                  <i class="bx bx-left-top-arrow-circle bx-rotate-90"></i>
                  <span>95.54%</span>
                </p>
              </div>
            </div>
            {/* <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"></div> */}
            <div className="  col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex  justify-content-center">
              <div className="card-child-2 rounded">
                <div className="parent-icon-loss">
                  <i class="bx bx-basketball"></i>
                </div>
                <p className="number-card-child">2.03.59</p>
                <p className="text-card-child">زیان سالانه ی ما</p>
                <p className="w-100 loss ">
                  <i class="bx bx-right-down-arrow-circle"></i>
                  <span>90.54%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <Example />
        </div>
</>
  )
}
