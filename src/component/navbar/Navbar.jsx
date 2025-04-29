import React, { useState , useEffect  } from "react";
import "./Navbar.css";

export default function Navbar({setisshowsidebar}) {
 
  const [starhover_1, setstarhover_1] = useState(false);
  const [starhover_2, setstarhover_2] = useState(false);
  const [starhover_3, setstarhover_3] = useState(false);
  const [starhover_4, setstarhover_4] = useState(false);
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 992) { // مقدار دلخواه عرض
          setisshowsidebar(false);
          
        } else {
          setisshowsidebar(true);
        }
        
      };
      window.addEventListener('resize', handleResize);
    },[])
  return (
    <>
      <nav class="navbar custom-navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
          <div className="header-left">
            <div className="header-left-logo">
              <span className="header-left-name">MOEIN</span>
              <span>
                <i class="bx bx-home-heart"></i>
              </span>
            </div>
            <div className="header-left-icon">
              <i
                onClick={() => setisshowsidebar((event) => !event)}
                className="bx bx-menu"
              ></i>
              
            </div>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle custom-dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bx bx-message"></i>
                  پیام ها
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item list-item-sub-menu" href="#">
                      {" "}
                      <div className="img-sub-menu">
                        <img src="images/4.jpg" alt="" />
                      </div>
                      <div className="personal-text">
                        <h3>عین چاوز</h3>
                        <p>لورم اسپیس یک متن ساختگی است</p>
                      </div>
                      <div className="time-message">
                        <p>32 دقیقه ی پیش</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item list-item-sub-menu" href="#">
                      <div className="img-sub-menu">
                        <img src="images/4.jpg" alt="" />
                      </div>
                      <div className="personal-text">
                        <h3>عین چاوز</h3>
                        <p>لورم اسپیس یک متن ساختگی است</p>
                      </div>
                      <div className="time-message">
                        <p>32 دقیقه ی پیش</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item list-item-sub-menu" href="#">
                      <div className="img-sub-menu">
                        <img src="images/4.jpg" alt="" />
                      </div>
                      <div className="personal-text">
                        <h3>عین چاوز</h3>
                        <p>لورم اسپیس یک متن ساختگی است</p>
                      </div>
                      <div className="time-message">
                        <p>32 دقیقه ی پیش</p>
                      </div>
                    </a>
                  </li>
                  <li className="last-item-dropdown">
                    <a href="#" className="dropdown-item">
                      همه را ببین
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle custom-dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="alarm-red"></div>
                  <i class="bx bx-bell bx-tada"></i>
                  اعلان ها
                </a>
                <ul class="dropdown-menu custom-dropdown-menu-2">
                  <li>
                    <a
                      class="dropdown-item list-item-sub-menu list-item-sub-menu-first justify-content-between"
                      href="#"
                    >
                      {" "}
                      <p>شما 4 اعلان دارید</p>
                      <span className="rounded">4</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item list-item-sub-menu justify-content-start"
                      href="#"
                    >
                      {" "}
                      <div className="icon-sub-menu">
                        <i class="bx bx-trending-up"></i>
                      </div>
                      <div className="notif-content">
                        <h3>پردازش تحویل </h3>
                        <p> 10 دقیقه قبل</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item list-item-sub-menu special-orange justify-content-start"
                      href="#"
                    >
                      <div className="icon-sub-menu check-orange">
                        <i class="bx bx-check-circle"></i>
                      </div>
                      <div className="notif-content">
                        <h3>سفارش کامل شد </h3>
                        <p> 1 ساعت پیش</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item list-item-sub-menu justify-content-start"
                      href="#"
                    >
                      <div className="icon-sub-menu">
                        <i class="bx bx-file"></i>
                      </div>
                      <div className="notif-content">
                        <h3>بلیط ها تولید شده</h3>
                        <p> 3 ساعت پیش</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item list-item-sub-menu special-red justify-content-start"
                      href="#"
                    >
                      <div className="icon-sub-menu check-red">
                        <i class="bx bx-user-check"></i>
                      </div>
                      <div className="notif-content">
                        <h3>تحویل کامل</h3>
                        <p> 6 ساعت پیش</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle  custom-dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bx bx-star ml-1"></i>
                  ابزار ها
                </a>
                <ul class="dropdown-menu custom-dropdown-menu-3">
                  <li>
                    <a
                      onMouseLeave={() => setstarhover_1(false)}
                      onMouseEnter={() => setstarhover_1(true)}
                      class="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i class="bx bx-envelope ml-3"></i>
                      پست الکترونیک
                    </a>
                    <i
                      class={`bx  ${starhover_1 ? `bxs-star` : `bx-star`}`}
                    ></i>
                  </li>
                  <li>
                    <a
                      onMouseLeave={() => setstarhover_2(false)}
                      onMouseEnter={() => setstarhover_2(true)}
                      class="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i class="bx bx-message-rounded-dots ml-3"></i>
                      گفت و گو کنید
                    </a>
                    <i
                      class={`bx  ${starhover_2 ? `bxs-star` : `bx-star`}`}
                    ></i>
                  </li>
                  <li>
                    <a
                      onMouseLeave={() => setstarhover_3(false)}
                      onMouseEnter={() => setstarhover_3(true)}
                      class="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i class="bx bxl-graphql ml-3"></i>
                      نماد پر
                    </a>
                    <i
                      class={`bx  ${starhover_3 ? `bxs-star` : `bx-star`}`}
                    ></i>
                  </li>
                  <li>
                    <a
                      onMouseLeave={() => setstarhover_4(false)}
                      onMouseEnter={() => setstarhover_4(true)}
                      class="dropdown-item"
                      href="#"
                    >
                      <i class="bx bx-credit-card-front ml-3"></i>
                      ابزارک ها
                    </a>
                    <i
                      class={`bx  ${starhover_4 ? `bxs-star` : `bx-star`}`}
                    ></i>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex parent-search-box-navbar" role="search">
              <input
                class="form-control search-box-navbar me-2"
                type="search"
                placeholder="اینجا سرچ کن ..."
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );

}
