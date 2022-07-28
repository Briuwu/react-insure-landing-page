import React from 'react'
import HeroMobile from '../images/image-intro-mobile.jpg'
import HeroDesktop from '../images/image-intro-desktop.jpg'

const Intro = () => {
  return (
    <div className='intro-bg'>
      <div className='pattern-left' aria-hidden></div>
      <div className='container intro'>
        <div className='intro-img'>
          <img className='intro-img-mobile' src={HeroMobile} alt="" />
          <img className='intro-img-desktop' src={HeroDesktop} alt="" />
        </div>
        <div className="intro-desc">
          <p className='intro-desc-title'>Humanizing<br/>your insurance.</p>
          <p className='intro-desc-paragraph'>Get your life insurange coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
          <button>VIEW PLANS</button>
        </div>
      </div>
      <div className='pattern-right' aria-hidden></div>
    </div>
  )
}

export default Intro