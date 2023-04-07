import React from 'react'

export const CardUsefull = ({ title, text, img }) => {
  console.log(img)
  return (
    <div className="card-usefull">
      <img src={img} alt="icon" />
      <h4 className="card-usefull__title">{title}</h4>
      <p className="card-usefull__text">{text}</p>
    </div>
  )
}
