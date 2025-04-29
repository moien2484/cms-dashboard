import React from "react";
import "./Carousel.css";
import { Users_1 } from "../../data";
import { Users_2 } from "../../data";
export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
          <div className="body-carousel pb-5">
              <section className="users-row-1 mt-4">
                {
                  Users_1.map((user1)=>(

                <div className="card-body-carousel">
                  <img className="mb-1" src={`${user1.img}`} alt="" />
                  <h2>{user1.name}</h2>
                  <p>{user1.country}</p>
                  <button>بیشتر ببینید</button>
                </div>
                  ))
                }
              </section>
              <section className="users-row-2 mt-4">
              {
                  Users_2.map((user2)=>(

                <div className="card-body-carousel">
                  <img className="mb-1" src={`${user2.img}`} alt="" />
                  <h2>{user2.name}</h2>
                  <p>{user2.country}</p>
                  <button>بیشتر ببینید</button>
                </div>
                  ))
                }
              </section>
            </div>
          </div>
          <div class="carousel-item">
            {" "}
            <div className="body-carousel pb-5">
              <section className="users-row-1 mt-4">
                {
                  Users_1.map((user1)=>(

                <div className="card-body-carousel">
                  <img className="mb-1" src={`${user1.img}`} alt="" />
                  <h2>{user1.name}</h2>
                  <p>{user1.country}</p>
                  <button>بیشتر ببینید</button>
                </div>
                  ))
                }
              </section>
              <section className="users-row-2 mt-4">
              {
                  Users_2.map((user2)=>(

                <div className="card-body-carousel">
                  <img className="mb-1" src={`${user2.img}`} alt="" />
                  <h2>{user2.name}</h2>
                  <p>{user2.country}</p>
                  <button>بیشتر ببینید</button>
                </div>
                  ))
                }
              </section>
            </div>
          </div>
          <div class="carousel-item">
            {" "}
            <div className="body-carousel pb-5">
              <section className="users-row-1 mt-4">
                {
                  Users_1.map((user1)=>(

                <div className="card-body-carousel">
                  <img className="mb-1" src={`${user1.img}`} alt="" />
                  <h2>{user1.name}</h2>
                  <p>{user1.country}</p>
                  <button>بیشتر ببینید</button>
                </div>
                  ))
                }
              </section>
              <section className="users-row-2 mt-4">
              {
                  Users_2.map((user2)=>(

                <div className="card-body-carousel">
                  <img className="mb-1" src={`${user2.img}`} alt="" />
                  <h2>{user2.name}</h2>
                  <p>{user2.country}</p>
                  <button>بیشتر ببینید</button>
                </div>
                  ))
                }
              </section>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
