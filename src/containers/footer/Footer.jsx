import React from 'react'
import './footer.css'
import gtp3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gtp3Logo} alt = "logo" />
          <p>OpenAI © 2015–2023 Privacy Policy Terms</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Overons</p>
          <p>Overons</p>
          <p>Overons</p>
          <p>Overons</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Overons</p>
          <p>Overons</p>
          <p>Overons</p>
          <p>Overons</p>
          <p>Overons</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Overons</p>
          <p>Overons</p>
          <p>Overons</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>OpenAI All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer