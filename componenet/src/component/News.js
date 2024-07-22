import React from 'react'
import './News.css';
const News = (props) => {
  return (
    
    <div>
        <h1 >{props.wl1}</h1>
        <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719878400&semt=sph" class="img-thumbnail" alt="Cinque Terre"></img>
        <p>{props.p}</p>
    </div>
  )
}

export default News