import React from 'react'
import FbIcon from '../images/icon-facebook.svg'
import TwIcon from '../images/icon-twitter.svg'
import PiIcon from '../images/icon-pinterest.svg'
import IgIcon from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className='container'>
      <div className="footer">
        <div className="footer-heading">
          <p>INSURE</p>
          <div className='footer-heading-img'>
            <img src={FbIcon} alt="" />
            <img src={TwIcon} alt="" />
            <img src={PiIcon} alt="" />
            <img src={IgIcon} alt="" />
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-all">
            <p className='footer-title'>OUR COMPANY</p>
            <p className='footer-info'>HOW WE WORK</p>
            <p className='footer-info'>WHY INSURE?</p>
            <p className='footer-info'>VIEW PLANS</p>
            <p className='footer-info'>REVIEWS</p>
          </div>
          <div className="footer-all">
            <p className='footer-title'>HELP ME</p>
            <p className='footer-info'>FAQ</p>
            <p className='footer-info'>TERMS OF USE</p>
            <p className='footer-info'>PRIVACY POLICY</p>
            <p className='footer-info'>COOKIES</p>
          </div>
          <div className="footer-all">
            <p className='footer-title'>CONTACT</p>
            <p className='footer-info'>SALES</p>
            <p className='footer-info'>SUPPORT</p>
            <p className='footer-info'>LIVE CHAT</p>
          </div>
          <div className="footer-all">
            <p className='footer-title'>OTHERS</p>
            <p className='footer-info'>CAREERS</p>
            <p className='footer-info'>PRESS</p>
            <p className='footer-info'>LICENSES</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer