import React from 'react'
import { Article } from '../../components'
import './blog.css'
import {blog01,
  blog02,
  blog03,
  blog04,
  blog05} from './imports'

const Blog = () => {
  return (
    <div className="gpt3__log section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it
        </h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date={"Mar 10, 2023"} title={"Developers can now begin building apps"} />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date={"Mar 10, 2023"} title={"Developers can now begin building apps"} />
          <Article imgUrl={blog03} date={"Mar 10, 2023"} title={"Developers can now begin building apps"} />
          <Article imgUrl={blog04} date={"Mar 10, 2023"} title={"Developers can now begin building apps"} />
          <Article imgUrl={blog05} date={"Mar 10, 2023"} title={"Developers can now begin building apps"} />
        </div>
      </div>
    </div>
  )
}

export default Blog