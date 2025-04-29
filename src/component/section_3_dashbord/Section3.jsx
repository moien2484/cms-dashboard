import React from "react";
import "./Section3.css";
import { useState } from "react";
import { Orders } from "../../data";
import Chart4 from "../chart/Chart_4";
export default function Section3() {
  const [lastOrders, setlastOrders] = useState(Orders);
  const deleteorder = (OrderID) =>
    setlastOrders(lastOrders.filter((prev) => prev.id !== OrderID));
  return (
    <>
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
        <div className="parent-table rounded">
          <div className="header-chart-circle">
            <div className="parent-icon-setting">
              <i className="bx bx-cog bx-tada bx-rotate-90"></i>
            </div>
            <h2>سفارشات اخیر</h2>
          </div>
          <table className="body-table">
            <thead>
              <tr>
                <th></th>
                <th>نام</th>
                <th>تاریخ</th>
                <th>تعداد</th>
                <th>مقدار</th>
                <th>قیمت</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {lastOrders.map((order) => (
                <tr className="item-order">
                  <td>
                    <img src={`${order.imgproduct}`} alt="" />
                  </td>
                  <td className="title-order">{order.title}</td>
                  <td>{order.history}</td>
                  <td>{order.numbers}</td>
                  <td>
                    <img src={`${order.imggraph}`} alt="" />
                  </td>
                  <td>{order.price}</td>
                  <td className="done-order">
                    <div>
                      <button
                        onClick={() => deleteorder(order.id)}
                        className="delet rounded"
                      >
                        حذف
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
        <div className="parent-chart-4 rounded">
          <div className="header-chart-4">
            <div className="parent-icon-setting-chast-4">
              <i className="bx bx-cog bx-tada bx-rotate-90"></i>
            </div>
            <div>
              <h2>معامله</h2>
              <p>5878 تراکنش موفق</p>
            </div>
          </div>
            <div className="body-chart-4">
              <h2>2,09,352 تومان</h2>
              <p className="color-orange">
              <i class="bx bx-left-top-arrow-circle bx-rotate-90"></i>
                <span>90.54%</span>
              </p>
            </div>
          <Chart4 />
        </div>
      </div>
    </>
  );
}
