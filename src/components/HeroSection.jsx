import React from 'react'
import Call from '../assets/auto-group-ti5t.png'
import HeroImg from '../assets/removebg-preview-1-Z8y.png'
const HeroSection = () => {
  return (
    <div className='hero'>
        <div className='hero-section'>
        <div className='text-section'>
<h1> Diversifying the Designs of <br/> Digital World</h1>
<p className=''>
        Explorogent International Services Private Limited (EISPL) is one of the
        most famous companies in the sector of Web and Mobile Development. In
        the market, EISPL has a strong presence in providing quality services to
        its clients.
        <br />
        <br />
        EISPL is convinced that one should diversify the offering, given the
        changing needs of the clients. That is why we engage in multiple
        projects and activities. We also possess knowledge in web development,
        app development, UI/UX design, as well as digital marketing.
      </p>
      <h4 className='call'><img id='call' src={Call} alt="" />Book a Call</h4>
        </div>
        <div className='img-section'>
           <img src={HeroImg} alt="" />
        </div>
    </div>
    </div>
  )
}

export default HeroSection