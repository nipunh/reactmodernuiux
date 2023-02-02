import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title : "Perform a wide variety of natural language tasks",
    text : "Create promo copy for the FamilyTime mobile application. It allows unlimited uploading, special filters and makes it easy to create albums of photos and videos."
  },
  {
    title : "Translate natural language to code with Codex",
    text : "Create promo copy for the FamilyTime mobile application. It allows unlimited uploading, special filters and makes it easy to create albums of photos and videos."
  },
  {
    title : "Perform a wide variety of natural language tasks",
    text : "Create promo copy for the FamilyTime mobile application. It allows unlimited uploading, special filters and makes it easy to create albums of photos and videos."
  },
  {
    title : "Built with OpenAI’s API",
    text : "Create promo copy for the FamilyTime mobile application. It allows unlimited uploading, special filters and makes it easy to create albums of photos and videos."
  },

]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features"> 
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future is Now and You Just Need To Realize It.
          Step into Future Today & Make it Happen.
          <p>Request Early Access</p>
        </h1>
      </div>

      <div className="gpt3__features-container">
        {
          featuresData.map((feature, index) => <Feature title={feature.title} text={feature.text} key={ClipboardItem.title + index} />)
        }
      </div>
    </div>
  )
}

export default Features