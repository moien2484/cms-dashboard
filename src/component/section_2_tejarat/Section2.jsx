import React from "react";
import "./Section2.css";
import App from "../timeline/Timeline";
import Chart6 from "../chart/Chart_6";
import Chart7 from "../chart/Chart_7";
export default function Section2() {
  return (
    <>
      <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
        <div className="section-1-right row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 align-self-center">
            <div className="card-incom-1 rounded">
              <div>75%</div>
              <h2>9,84,235 تومان</h2>
              <p>درآمد سالانه ما</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 align-self-center">
            <div className="card-incom-2 rounded">
              <div>75%</div>
              <h2>4,55,462 تومان</h2>
              <p>درآمد سالانه ما</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            {" "}
            <div className="parent-selling-product rounded">
              <div className="header-selling-product">
                <div className="header-activity">
                  <div className="parent-icon-setting">
                    <i className="bx bx-cog bx-tada bx-rotate-90"></i>
                  </div>
                  <h2>پرفروش ترین محصول</h2>
                </div>
              </div>
              <div className="body-selling-product rounded">
                <img
                  className="img-selling-product"
                  src="images/product-selling-1.png"
                  alt=""
                />
                <div className="text-selling-product">
                  <h2>کفش های پرطرفدار نایک</h2>
                  <p>پیشنهاد جدید فقط 126.00 تومان</p>
                  <div className="icons-star-selling-product">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </div>
                </div>
                <div className="icon-shop-selling-product rounded">
                  <i class="bx bx-shopping-bag"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="parent-sale mt-4 rounded">
              <div className="header-sale">
                <div className="header-activity">
                  <div className="parent-icon-setting">
                    <i className="bx bx-cog bx-tada bx-rotate-90"></i>
                  </div>
                  <h2>فروش کل</h2>
                </div>
              </div>
              <div className="body-sale">
                <Chart6 />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 align-self-center">
            <div className="parent-purpose mt-4 rounded">
              <div className="body-purpose">
                <div className="card-header-purpose">
                  <div className="card-1-header-purpose mt-3 rounded">
                    <h2>ما آرشیو می کنیم</h2>
                    <p>بعد از 3 ساعت تکمیل شد</p>
                    <div>687.780 تومان</div>
                  </div>
                  <div className="card-2-header-purpose mt-3 rounded">
                    <h2>هدف ما</h2>
                    <p>تکمیل شد</p>
                    <div>687.780 تومان</div>
                  </div>
                </div>
                <div className="background-purpose">
                  <img src="images/target1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
        <div className="parent-timeline rounded">
          <div className="header-timeline">
            <div className="header-activity">
              <div className="parent-icon-setting">
                <i className="bx bx-cog bx-tada bx-rotate-90"></i>
              </div>
              <h2>جدول زمان بندی فعالیت</h2>
            </div>
          </div>
          <div className="body-timeline">
            <App />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div className="parent-chart-growth rounded mt-4">
        <div className="header-sale">
          
                <div className="header-activity">
                  <div className="parent-icon-setting">
                    <i className="bx bx-cog bx-tada bx-rotate-90"></i>
                  </div>
                  <h2>فروش سالانه</h2>
                </div>
                <div className="sub-header mr-4">
                <h4>5,56548 تومان</h4>
                <i class="bx bx-left-top-arrow-circle bx-rotate-90"></i>
                <p>94 درصد بیشتر از سال گذشته</p>
              </div>
              </div>
          <Chart7/>
        </div>
      </div>
    </>
  );
}
