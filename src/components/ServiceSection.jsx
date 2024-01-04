import React, { useEffect, useRef } from "react";
import One from "../assets/software4224716-1-uss.png";
import Two from "../assets/code3829489-1-MEu.png";
import Three from "../assets/cloud-computing5738519-1-d4h.png";
import Four from "../assets/marketing8227788-1-sXs.png";
import Five from "../assets/seo10390574-1.png";
import Arrow from '../assets/group-401-9Xj.png'
const ServiceSection = () => {

  const serviceBoxRef = useRef();

  useEffect(() => {
    const totalWidth =
      serviceBoxRef.current &&
      serviceBoxRef.current.scrollWidth -
        serviceBoxRef.current.clientWidth;

    // Set initial scroll position to show the first card
    if (serviceBoxRef.current) {
      serviceBoxRef.current.scrollLeft = totalWidth;
    }
  }, []);

  return (
    <div className="service-section">
      <div className="service-text">
        <h1>Stackkaroo’s Digital Services</h1>
        <p>
          We excel with reliability, innovation and customer-centric approach
          for our quality products.
          <br />
          Our dedicated team ensures that the solutions provided are dependable
          and long-term
        </p>
      </div>
      <div className="service-box" ref={serviceBoxRef}>
        <div className="service-one">
          <div>
            <img src={One} alt="" />
            <h4>Website <br/> Development</h4>
          </div>
          <p> We specialize in responsive website development, ensuring optimal performance across various devices.</p>
          <div className="arrow">
          <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="service-one">
          <div>
            <img src={Two} alt="" />
            <h4>App <br/> Development</h4>
          </div>
          <p>We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation.</p>
          <div className="arrow">
          <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="service-one">
          <div>
            <img src={Three} alt="" />
            <h4>Software <br/> Development</h4>
          </div>
          <p> We specialize in tailored solutions ensuring business growth and efficiency by providing superior software.</p>
          <div className="arrow">
          <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="service-one">
          <div>
            <img src={Four} alt="" />
            <h4>
              UI/UX
              <br />
              Design
            </h4>
          </div>
          <p>We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces.</p>
          <div className="arrow">
          <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="service-one">
          <div>
            <img src={Four} alt="" />
            <h4>Digital <br/> Marketing</h4>
          </div>
          <p>We specialize in tailored digital marketing solutions and ensure effective online marketing strategies.</p>
          <div className="arrow">
          <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="service-one">
          <div>
            <img src={Five} alt="" />
            <h4>SEO <br/> Optimization</h4>
          </div>
          <p>We ensure optimal website traffic by addressing factors such as user experience, accessibility, product details, and monitoring target audience.</p>
          <div className="arrow">
            <img src={Arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
