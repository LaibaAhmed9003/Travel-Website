import React from "react";
import memoriesCSS from './../Memories/Memories.module.css'

import MemoriesImg1 from './../../assets/img1.jpg'
import MemoriesImg2 from './../../assets/bali-1.png'
import MemoriesImg3 from './../../assets/cancun.png'
import MemoriesImg4 from './../../assets/pexels-arefin-879478.jpg'
import MemoriesImg5 from './../../assets/nah-trang.png'
import MemoriesImg6 from './../../assets/houses-8010401_1280.jpg'
import MemoriesImg7 from './../../assets/Tokyo.png'

function Memories() {


  return (


    <div className={`${memoriesCSS.Memories_wrapper} section`} id="memories">


      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg1} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Budget Friendly Getaway</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg2} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Escape the Reality</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg3} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Explore and Discover</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg4} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3> Memories that last a Lifetime</h3>
          <button>View Tours</button>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg5} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Escape the Ordinary</h3>
          <a href="#">View Tours</a>
        </div>
      </div>

      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg6} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3> Journeys that Inspire</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg7} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Explore Diverse Culture</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
    </div>


  )

}
export default Memories