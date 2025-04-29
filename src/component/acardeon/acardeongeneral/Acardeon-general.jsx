// import "./Acardeon-general.css";
// import { Link } from "react-router-dom";
// function AllCollapseExample() {
//   return (
//     <div className="accordion accordion-flush" id="accordionFlushExample">
//       <div className="accordion-item">
//         <h2 className="accordion-header" id="flush-headingOne">
//           <button
//             className="accordion-button collapsed custom-acardeon-header "
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#flush-collapseOne"
//             aria-expanded="false"
//             aria-controls="flush-collapseOne"
//           >
//             <i class="bx bx-home ml-3"></i>
//             داشبورد
//           </button>
//         </h2>
//         <div
//           id="flush-collapseOne"
//           className="accordion-collapse collapse"
//           aria-labelledby="flush-headingOne"
//           data-bs-parent="#accordionFlushExample"
//         >
//           <div className="accordion-body">
//             <ul className="sub-menu">
//               <Link className="link" to="/">
//                 <li>پیش فرض </li>
//               </Link>
//               <Link className="link" to="/tejarat-electronic">
//                 <li>تجارت و الکترونیک</li>
//               </Link>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="accordion-item">
//         <h2 className="accordion-header" id="flush-headingTwo">
//           <button
//             className="accordion-button collapsed custom-acardeon-header "
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#flush-collapseTwo"
//             aria-expanded="false"
//             aria-controls="flush-collapseTwo"
//           >
//             <i class="bx bx-credit-card-front ml-3"></i>
//             ابزارک ها
//           </button>
//         </h2>
//         <div
//           id="flush-collapseTwo"
//           className="accordion-collapse collapse"
//           aria-labelledby="flush-headingTwo"
//           data-bs-parent="#accordionFlushExample"
//         >
//           <div className="accordion-body">
//             <ul className="sub-menu">
//               <li>عمومی </li>
//               <li> چارت سازمانی</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="accordion-item">
//         <h2 className="accordion-header" id="flush-headingThree">
//           <button
//             className="accordion-button collapsed custom-acardeon-header "
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#flush-collapseThree"
//             aria-expanded="false"
//             aria-controls="flush-collapseThree"
//           >
//             <i class="bx bx-notepad ml-3"></i>
//             صفحه آرایی
//           </button>
//         </h2>
//         <div
//           id="flush-collapseThree"
//           className="accordion-collapse collapse"
//           aria-labelledby="flush-headingThree"
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

// export default AllCollapseExample;

import "./Acardeon-general.css";
import { Link } from "react-router-dom";
import React from "react";
import { Collapse } from "antd";
const items = [
  {
    key: "1",
    label: (
      <>
        <h2>
          <i class="bx bx-home ml-3"></i>
          داشبورد
        </h2>
      </>
    ),
    children: (
      <>
        <ul className="sub-menu">
          <Link className="link" to="/">
            <li>پیش فرض </li>
          </Link>
          <Link className="link" to="/tejarat-electronic">
            <li>تجارت و الکترونیک</li>
          </Link>
        </ul>
      </>
    ),
  },
  {
    key: "2",
    label: (
      <>
        <h2>
          <i class="bx bx-credit-card-front ml-3"></i>
          ابزارک ها
        </h2>
      </>
    ),
    children: (
      <>
        <ul className="sub-menu">
          <li>چارت سازمانی</li>
          <li>عمومی</li>
        </ul>
      </>
    ),
  },
  {
    key: "3",
    label: (
      <>
        <h2>
          <i class="bx bx-notepad ml-3"></i>
          صفحه آرایی
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
const Acardeongeneral = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};
export default Acardeongeneral;
