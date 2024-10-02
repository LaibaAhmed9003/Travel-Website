import React from "react";
import TripCSS from "./../Trips/Trips.module.css"

import trip01 from "./../../assets/Destination06.jpg"
import trip02 from "./../../assets/mountains-1624284_1280.jpg"
import trip03 from "./../../assets/04.jpg"
import trip04 from "./../../assets/Destination05.jpg"
import trip05 from "./../../assets/05.jpg"
import trip06 from "./../../assets/boat-4899802_640.jpg"
import trip07 from "./../../assets/02.jpg"
import trip08 from "./../../assets/pexels-arefin-879478.jpg"

function Trips() {
  return (
    <div className={`${TripCSS.trips_wrapper} section`} id="trips">
      <h2>Popular Trips</h2>
      <div className={TripCSS.cards}>
        <div className={TripCSS.card}>
          <img src={trip01} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>Australia </h3>

            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"></i>7 Days</span>
              <span> <i className="ri-calendar-line"></i>5 Places</span>
              <span> <i className="ri-flag-line"></i>Australia</span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$1,200</span>
              <button className={TripCSS.book}>Book Now</button>

            </div>

          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip02} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>Pakistan</h3>

            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"></i>7 Days</span>
              <span> <i className="ri-calendar-line"></i>5 Places</span>
              <span> <i className="ri-flag-line"></i>Skardu</span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$2,200</span>
              <button className={TripCSS.book}>Book Now</button>

            </div>

          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip03} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>China</h3>

            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"></i>7 Days</span>
              <span> <i className="ri-calendar-line"></i>9 Places</span>
              <span> <i className="ri-flag-line"></i>Beijing</span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$3,200</span>
              <button className={TripCSS.book}>Book Now</button>

            </div>

          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip04} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>Bangladesh</h3>

            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"></i>7 Days</span>
              <span> <i className="ri-calendar-line"></i>8 Places</span>
              <span> <i className="ri-flag-line"></i>Mountains</span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$1,200</span>
              <button className={TripCSS.book}>Book Now</button>

            </div>

          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip05} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>Dubai</h3>

            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"></i>7 Days</span>
              <span> <i className="ri-calendar-line"></i>3 Places</span>
              <span> <i className="ri-flag-line"></i>Sea</span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$4,200</span>
              <button className={TripCSS.book}>Book Now</button>

            </div>

          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip06} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>Switzerland</h3>

            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"></i>7 Days</span>
              <span> <i className="ri-calendar-line"></i>4 Places</span>
              <span> <i className="ri-flag-line"></i>Boats</span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$4,200</span>
              <button className={TripCSS.book}>Book Now</button>

            </div>

          </div>
        </div>
        <div className={TripCSS.card}>

          <img src={trip07} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>Malaysia</h3>

            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"></i>7 Days</span>
              <span> <i className="ri-calendar-line"></i>5 Places</span>
              <span> <i className="ri-flag-line"></i>Waterfall</span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>$1,200</span>
              <button className={TripCSS.book}>Book Now</button>

            </div>

          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip08} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>Turkey</h3>

            <div className={TripCSS.TripDetails}>
              <span> <i className="ri-calendar-line"></i> 7 Days</span>
              <span> <i className="ri-calendar-line"></i> 5 Places</span>
              <span> <i className="ri-flag-line"></i>Istanbul</span>
            </div>
            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}> $1,200 </span>
              <button className={TripCSS.book}>Book Now</button>

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Trips