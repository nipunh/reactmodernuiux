import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amaxing with GPT-3 Open_AI

        </h1>
        <p>
          Chat Generative Pre-Trained Transformer, commonly called ChatGPT,
          is a chatbot launched by OpenAI in November 2022.
          It is built on top of OpenAI's GPT-3 family of large language models,
          and is fine-tuned with both supervised and reinforcement learning techniques.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your email address' />
          <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1006 people requested access</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>


    </div>
  )
}

export default Header