import React from 'react'
import searchCSS from './../Searches/Search.module.css'

function Search() {
  return (
    <div className={`${searchCSS.search_wrapper} section`} id="searches">
      <h2>Popular Searches</h2>
      <div className={searchCSS.Cards}>
        <div className={searchCSS.card}>
          <i className="ri-search-line"></i>
          <h3>Domestic Trips <span>See World in a New Light</span></h3>
        </div>
        <div className={searchCSS.card}>
          <i className="ri-search-line"></i>
          <h3>Vacations in 14 Days <span>Limited Availability and Selling fast</span></h3>
        </div>
        <div className={searchCSS.card}>
          <i className="ri-search-line"></i>
          <h3>Limited Offer  <span>Browse for trips</span></h3>
        </div>
        <div className={searchCSS.card}>
          <i className="ri-search-line"></i>
          <h3>Tours under $2,000 <span>Browse Our Value Vacations</span></h3>
        </div>
        <div className={searchCSS.card}>
          <i className="ri-search-line"></i>
          <h3>Past Guest Benefites<span>Savings with our Global Tour rewards</span></h3>
        </div>
        <div className={searchCSS.card}>
          <i className="ri-search-line"></i>
          <h3>Vacations in 14 Days<span>Limited Availability and Selling fast</span></h3>
        </div>
      </div>

    </div>
  )
}

export default Search
