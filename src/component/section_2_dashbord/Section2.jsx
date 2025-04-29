import React, { useState } from "react";
import BarChart3 from "../chart/Chart_3";
import "./Section2.css";
import Example from "../chart/Chart-2";
import { Activitys } from "../../data";

export default function Section2() {
  const [LastActivitys, setLastActivitys] = useState(Activitys);
  const [doneActivities, setDoneActivities] = useState({ 2: true });
  const toggleDone = (id) => {
    setDoneActivities((prev) => ({
      ...prev,
      [id]: !prev[id], // فقط وضعیت آیتمی که کلیک شده تغییر کنه
    }));
  };
  const updateactivitys = (activityId) => {
    setLastActivitys(LastActivitys.filter((prev) => prev.id !== activityId));
  };
  return (
    <>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className="parent-chart-circle rounded">
          <div className="subject-patent-chart-circle">
            <div className="header-chart-circle">
              <div className="parent-icon-setting">
                <i className="bx bx-cog bx-tada bx-rotate-90"></i>
              </div>
              <h2>بررسی اجمالی رشد</h2>
            </div>
            <p>
              <i className="bx bx-left-top-arrow-circle bx-rotate-90"></i>
              رشد 8 درصد
            </p>
          </div>
          <div className="text-parent-chart-circle">
            <p className="color-green">جمع سفارشات : 76</p>
            <p className="color-orange">جمع محصولات : 67</p>
            <p className="color-green">تعداد : 61</p>
            <p className="color-orange">مشاهده‌ی صفحات : 90</p>
          </div>
          <Example />
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className="parent-cahrt-3 rounded">
          <div className="header-cahrt-3">
            <div className="parent-icon-setting">
              <i className="bx bx-cog bx-tada bx-rotate-90"></i>
            </div>
            <h2>فعالسازی کاربر</h2>
          </div>
          <div className="body-chart-3">
            <BarChart3 />
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
        <div className="parent-activity rounded">
          <div className="header-activity">
            <div className="parent-icon-setting">
              <i className="bx bx-cog bx-tada bx-rotate-90"></i>
            </div>
            <h2>آخرین فعالیت</h2>
          </div>
          <div className="body-activity">
            <ul>
              {LastActivitys.map((activity) => (
                <li
                  key={activity.id}
                  className={`mb-2 list-items-activity ${
                    doneActivities[activity.id] ? "done-activity" : ""
                  }`}
                >
                  <div className="d-flex align-items-center">
                    <div className="icon-activity">
                      <i className={`bx ${activity.icon}`}></i>
                    </div>
                    <div className="text-activity">
                      <h2>{activity.title}</h2>
                      <p>{activity.time}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => toggleDone(activity.id)}
                      className={`done rounded ${
                        doneActivities[activity.id] && "doned"
                      }`}
                    >
                      انجام شد
                    </button>
                    <button
                      onClick={() => updateactivitys(activity.id)}
                      className="delet rounded"
                    >
                      حذف
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
