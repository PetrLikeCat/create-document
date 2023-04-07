import React from 'react'

export const Card = ({ title, text, img }) => {
  return (
    <div className="useService-card">
      <img className="useService-card__icon" src={img} alt="icon user" />
      <div className="useService-card__title">
      <h3 className="useService-card__title">{title}</h3>
      </div>
      {/* <h3 className="useService-card__title">{title}</h3> */}
      <p className="useService-card__text">{text}</p>
    </div>
  )
}
