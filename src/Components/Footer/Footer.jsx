import React from "react";
import footerCSS from './../Footer/Footer.module.css'

function Footer() {
  return (
    <div className={`${footerCSS.Footer_wrapper} section`} id="footer">

      <div className={footerCSS.top_container}>

        <div className={footerCSS.logo}>
          <a href="#">Traveller</a>

        </div>
        <div className={footerCSS.social}>
          <i className="ri-facebook-line"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-twitter-x-line"></i>
          <i className="ri-youtube-line"></i>

        </div>
      </div>
      <div className={footerCSS.bottom_container}>
        <div className={footerCSS.footer_Links}>
          <h3>About Traveller</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our History</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Trips</a></li>
          </ul>
        </div>
        <div className={footerCSS.footer_Links}>
          <h3>Destinations</h3>
          <ul>
            <li><a href="#">USA</a></li>
            <li><a href="#">Latin America</a></li>
            <li><a href="#">Singapore</a></li>
            <li><a href="#">Europe</a></li>
          </ul>
        </div>
        <div className={footerCSS.footer_Links}>
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Booking Conditions</a></li>
            <li><a href="#">Recommendations</a></li>
          </ul>
        </div>
        <div className={footerCSS.footer_Links}>
          <h3>Our Newsletter</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eveniet quia, aliquam aliquid itaque delectus voluptas ad placeat quod corrupti!</p>
          <div className={footerCSS.input_wrapper}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;
