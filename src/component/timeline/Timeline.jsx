import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import "./Timeline.css";
const App = () => (
  <Timeline
    items={[
      {
        color: "green",
        children: (
          <>
            <p className="date-timeline">1401-04-20 امروز</p>
            <div className="mt-4 mb-4">
              <h2 className="title-timline">محصول به روز شده</h2>
              <p className="main-body-timeline">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
              </p>
            </div>
          </>
        ),
      },
      {
        color: "red",
        children: (
          <>
            <div style={{ gap: "8px" }} className="d-flex">
              <p className="date-timeline">1401-04-20 امروز</p>
              <span class="badge text-white badge-main-nav">جدید</span>
            </div>

            <div className="mt-4 mb-4">
              <h2 className="title-timline">
                جیمز دقیقاً محصول شما را دوست دارد
              </h2>
              <p className="main-body-timeline">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
              </p>
              <ul style={{ gap: "10px" }} className="d-flex mt-3 ">
                <li className="items-img-timeline">
                  <img src="images/11.png" alt="" />
                </li>
                <li className="items-img-timeline">
                  <img src="images/10.png" alt="" />
                </li>
              </ul>
            </div>
          </>
        ),
      },
      {
        children: (
          <>
            <p className="date-timeline">1401-04-20 امروز</p>
            <div className="mt-4 mb-4">
              <h2 className="title-timline">
                جان دئو دقیقاً محصول شما را دوست دارد
              </h2>
              <p className="main-body-timeline">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
              </p>
              
              <div className="text-center mt-5"><span className="tomorrow rounded">فردا</span></div>
            </div>
          </>
        ),
      },
      {
        color: "gray",
        children: (
          <>
            <p className="date-timeline">1400/04/20 فردا</p>
            <div className="mt-4 mb-4">
              <h2 className="title-timline">
              کل درآمد امروز
              </h2>
              <p className="main-body-timeline">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
              </p>
            </div>
          </>
        ),
      },
    ]}
  />
);
export default App;
