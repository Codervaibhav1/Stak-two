import React from 'react'
import One from '../assets/calendar3483805-1-QSh.png'
import Two from '../assets/first-aid-kit4270775-1.png'
import Three from '../assets/tracking2420467-1-sKb.png'
import Four from '../assets/luggage6213809-1.png'
import Five from '../assets/info5639164-1.png'
import Six from '../assets/gift-list9612685-1.png'
const Travels = () => {
  return (
    <div className="placement">
    <div className="placement-section">
      <h1>Plankaroo Tours &amp; Travels Services</h1>
      <p>
      We Provide the Best Class Services to make your vacation fun and memorable
      </p>
      <div className="place-box">
        <div className="place-one">
          <img src={One} alt="" />
          <h4>Booking Automation</h4>
          <p>Check out our Booking Automation for easy and hassle-free reservations. It simplifies the process and makes our platform user-friendly.</p>
        </div>
        <div className="place-one">
          <img src={Two} alt="" />
          <h4>First Aid Medical Kit</h4>
          <p>At Plankaroo, your safety and peace of mind are our top priority. We provide essential health care services, like First Aid Medical Kits, to equip you for any circumstance and confident travel.</p>
        </div>
        <div className="place-one">
          <img src={Three} alt="" />
          <h4>Tracking Feature</h4>
          <p>You understand the importance of staying connected with family during your visit. Plankaroo.com tracks loved ones for peace of mind and allows you to fully enjoy your journey.</p>
        </div>
        <div className="place-one">
          <img src={Four} alt="" />
          <h4>Customized Tour Packages</h4>
          <p>Enjoy our custom tour packages. Choose destinations, activities, accommodations, restaurants, vehicles, and tour guides for a personalized itinerary. We design packages for every traveler.</p>
        </div>
        <div className="place-one">
          <img src={Five} alt="" />
          <h4>Information Automation</h4>
          <p>Plankaroo.com&#39;s Info Automation ensures understanding of cultural activities in user&#39;s language. We use 3D map for precise details, making travels more exciting.</p>
        </div>
        <div className="place-one">
          <img src={Six} alt="" />
          <h4>
          Surprise Plans
          </h4>
          <p>Surprise Plans at Plankaroo.com for an enhanced trip experience. Special packages and customized surprises to elevate your journey. Let us add spice to your travels.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Travels