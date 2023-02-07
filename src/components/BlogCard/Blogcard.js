import React from 'react'
import './BlogCard.css'
const Blogcard = (props) => {
  return (
    <div className="blog_card">
      <div className="card_img">
        <img src={props.img} alt="img" height={150} width={150}/>
      </div>
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default Blogcard;