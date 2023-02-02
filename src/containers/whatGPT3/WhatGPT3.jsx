import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whatgpt3">
      <div className="gpt3__whatgpt3-features">
        <Feature title={"What is GPT-3"} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are bryond your imagination</h1>
        <p>Explore the Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature title={"Chatbots"}  text={""} />
        <Feature title={"Knowledgebase"} text={""} />
        <Feature title={"Education"} text={""} />
      </div>
    </div> 

  )
}

export default WhatGPT3