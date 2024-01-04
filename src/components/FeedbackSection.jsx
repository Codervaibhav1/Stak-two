import React from "react";
import BoxOne from '../assets/auto-group-tbjs.png'
import BoxTwo from '../assets/auto-group-3tn5.png'
import BoxThree from '../assets/auto-group-yii1.png'
import BoxFour from '../assets/auto-group-n1sd.png'
import BoxFive from '../assets/auto-group-yhux.png'
const FeedbackSection = () => {
  return (
    <div className="choose-section">
      <div className="choose">
        <h1>Why Choose Us?</h1>
        <p>
          We excel with reliability, innovation and customer-centric approach
          for our quality products.
          <br />
          Our dedicated team ensures that the solutions provided are dependable
          and long-term
        </p>
      </div>
      <div className="feedback">
        <div className="box-one">
            <img src={BoxOne} alt="" />
            <p>User-Centric <br/> Approach</p>
        </div>
        <div className="box-one">
        <img src={BoxTwo} alt="" />
            <p>Customer <br/> Satisfaction</p>
        </div>
        <div className="box-one">
        <img src={BoxThree} alt="" />
            <p>Integrating <br/> Feedback</p>
        </div>
        <div className="box-one">
        <img src={BoxFour} alt="" />
            <p>High Quality <br/> Products</p>
        </div>
        <div className="box-one">
        <img src={BoxFive} alt="" />
            <p>On-Time Product<br/> Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
