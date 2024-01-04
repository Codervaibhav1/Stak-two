import React from 'react'
import StoryImg from '../assets/baf2eadd-07e8-4143-a6d9-c5610f45f3ec-cover-removebg-preview-1-ucq.png'
import Rupee from '../assets/group-394-jL9.png'
const StorySection = () => {
  return (
   <div className='story'>
     <div className='story-section'>
        <div className='story-text'>
            <h1>Our Story</h1>
            <p className=''>
        Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra
        bring their extensive experience to the forefront as industry veterans.
        Our team is fueled by innovation, continually striving to exceed
        customer expectations.
        <br />
        <br />
        Operating from our registered office in Agartala Sadar, Tripura (W), our
        company is officially registered with the Corporate Identification
        Number (CIN). Our active status and an authorized share capital of Rs
        10.00 lac are a source of pride.
      </p>
      <h4 className='rupee'><img id='rupee' src={Rupee} alt="" />Get Estimated Project Cost</h4>
        </div>
        <div className='story-img'>
            <img src={StoryImg} alt="" />
        </div>
    </div>
   </div>
  )
}

export default StorySection