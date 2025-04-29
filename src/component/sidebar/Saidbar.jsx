import React from "react";
import "./Saidbar.css";
import Acardeonparts from "../acardeon/acardeonparts/acardeon-parts";
import Acardeongeneral from "../acardeon/acardeongeneral/Acardeon-general";
export default function Saidbar() {
  return (
    <div className="saidbar">
      <div className="header-original-left-saidbar">
        <div className="main-nav mt-3">
          <div className="main-parent-icon">
            <div className="parent-icon-setting">
              <i class="bx bx-cog bx-tada bx-rotate-90"></i>
            </div>
          </div>

          <div className="main-nav-img">
            <img className="img-nav" src="images/1.png" alt="" />
          </div>
          <div style={{ marginTop: "-15px" }}>
            <span class="badge text-white badge-main-nav">جدید</span>
          </div>
          <div className="mt-3">
            <h3 className="color-green title-main-nav">ایمی والتر</h3>
            <p className="position-main-nav">اداره منابع انسانی</p>
          </div>
          <div className="w-100 mt-2">
            <ul className="parent-flow">
              <li>
                <span>19.8 هزار</span>
                <p>دنبال کننده</p>
              </li>
              <span className="midle-flow-main-nav"></span>
              <li>
                <span> 2 سال</span>
                <p>تجربه</p>
              </li>
              <span className="midle-flow-main-nav"></span>
              <li>
                <span>95.3 هزار</span>
                <p>دنبالکرده</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="body-original-saidbar mt-3 p-4">
        <div className="general">
          <h1 className="title-general ">عمومی</h1>
          <div className="general-acardeons mt-3">
            <Acardeongeneral />
          </div>
          <h1 className="title-general ">اجزا</h1>
          <div className="general-acardeons mt-3">
            <Acardeonparts />
          </div>
        </div>
      </div>
    </div>
  );
}
