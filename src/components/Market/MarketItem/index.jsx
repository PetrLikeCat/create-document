import React from 'react'

export const MarketItem = ({ title, text }) => {
  console.log(title)
  return (
    <div className="market-reasons">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}
