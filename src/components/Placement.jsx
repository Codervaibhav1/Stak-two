import React from "react";
import One from '../assets/locations2837797-7-tAy.png'
import Two from '../assets/promotion1589592-1-qHF.png'
import Three from '../assets/pin3192970-1.png'
import Four from '../assets/badge9616733-1-jzD.png'
import Five from '../assets/performance7655790-5.png'
import Six from '../assets/commitment5165921-1-1pq.png'
const Placement = () => {
  
  return (
    <div className="placement">
      <div className="placement-section">
        <h1>Stackkaroo’s Talent Hiring &amp; Job Placement Services</h1>
        <p>
          We are a talent searching platform that redesigns how companies hire
          talents. It is a cost-effective solution for industries. We also
          provide global job opportunities with good salaries, support, and
          professional development.
        </p>
        <div className="place-box">
          <div className="place-one">
            <img src={One} alt="" />
            <h4>Unleashing Top Talent Globally</h4>
            <p>We offer 5% top talents and supports companies hiring from various time zones.</p>
          </div>
          <div className="place-one">
            <img src={Two} alt="" />
            <h4>Securing Success</h4>
            <p>The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.</p>
          </div>
          <div className="place-one">
            <img src={Three} alt="" />
            <h4>Beyond Borders</h4>
            <p>We provide both, flexible full-time and part-time jobs</p>
          </div>
          <div className="place-one">
            <img src={Four} alt="" />
            <h4>End-to-End Excellence</h4>
            <p>In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.</p>
          </div>
          <div className="place-one">
            <img src={Five} alt="" />
            <h4>Efficiency Redefined</h4>
            <p>The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.</p>
          </div>
          <div className="place-one">
            <img src={Six} alt="" />
            <h4>
              Simplified Contracts
              <br />
              Satisfied Partnerships
            </h4>
            <p>The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;
