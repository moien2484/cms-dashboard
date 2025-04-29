// import React from "react";

// export default function Acardeonparts() {
//   return (
//     <div className="accordion accordion-flush" id="accordionFlushExample">
//       <div className="accordion-item">
//         <h2 className="accordion-header" id="flush-headingfour">
//           <button
//             className="accordion-button collapsed custom-acardeon-header "
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#flush-collapsefour"
//             aria-expanded="false"
//             aria-controls="flush-collapsefour"
//           >
//             <i class='bx bx-package ml-3'></i>
//             کیت رابط کاربری
//           </button>
//         </h2>
//         <div
//           id="flush-collapsefour"
//           className="accordion-collapse collapse"
//           aria-labelledby="flush-headingfour"
//           data-bs-parent="#accordionFlushExample"
//         >
//           <div className="accordion-body">
//             <ul className="sub-menu">
//               <li>حالت رنگ </li>
//               <li> تایپوگرافی </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="accordion-item">
//         <h2 className="accordion-header" id="flush-headingfive">
//           <button
//             className="accordion-button collapsed custom-acardeon-header "
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#flush-collapsefive"
//             aria-expanded="false"
//             aria-controls="flush-collapsefive"
//           >
//             <i class='bx bx-duplicate ml-3'></i>
//               کاربری اضافه
//           </button>
//         </h2>
//         <div
//           id="flush-collapsefive"
//           className="accordion-collapse collapse"
//           aria-labelledby="flush-headingfive"
//           data-bs-parent="#accordionFlushExample"
//         >
//           <div className="accordion-body">
//             <ul className="sub-menu">
//               <li>چسبنده </li>
//               <li>جدولبندی</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="accordion-item">
//         <h2 className="accordion-header" id="flush-headingsix">
//           <button
//             className="accordion-button collapsed custom-acardeon-header "
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#flush-collapsesix"
//             aria-expanded="false"
//             aria-controls="flush-collapsesix"
//           >
//             <i class='bx bx-edit-alt ml-3' ></i>
//             سازندگان
//           </button>
//         </h2>
//         <div
//           id="flush-collapsesix"
//           className="accordion-collapse collapse"
//           aria-labelledby="flush-headingsix"
//           data-bs-parent="#accordionFlushExample"
//         >
//           <div className="accordion-body">
//             <ul className="sub-menu">
//               <li>پیش فرض </li>
//               <li>جعبه شده </li>
//               <li>چپ چین شده</li>
//               <li>تاریک </li>
//               <li>پاورقی</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Collapse } from "antd";
const items = [
  {
    key: "1",
    label: (
      <>
        <h2>
          <i class="bx bx-package ml-3"></i>
          کیت رابط کاربری
        </h2>
      </>
    ),
    children: (
      <>
        <ul className="sub-menu">
          <li>حالت رنگ </li>
          <li> تایپوگرافی </li>
        </ul>
      </>
    ),
  },
  {
    key: "2",
    label: (
      <>
        <h2>
          <i class="bx bx-duplicate ml-3"></i>
          کاربری اضافه
        </h2>
      </>
    ),
    children: (
      <>
        <ul className="sub-menu">
          <li>چسبنده </li>
          <li>جدولبندی</li>
        </ul>
      </>
    ),
  },
  {
    key: "3",
    label: (
      <>
        <h2>
          <i class="bx bx-edit-alt ml-3"></i>
          سازندگان
        </h2>
      </>
    ),
    children: (
      <>
        <ul className="sub-menu">
          <li>پیش فرض </li>
          <li>جعبه شده </li>
          <li>چپ چین شده</li>
          <li>تاریک </li>
          <li>پاورقی</li>
        </ul>
      </>
    ),
  },
];
const Acardeonparts = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};
export default Acardeonparts;
