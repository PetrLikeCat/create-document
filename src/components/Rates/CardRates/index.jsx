import React from 'react'
import ruble from "..//..//../img/ruble.svg"
export const CardRates = ({ title, subtitle, text, price, popul }) => {
  const { active, setActive } = React.useState("")

  const textMap = text.map((item) =>
    <p>{item}</p>)
  return (
    <div className={`rate ${active}`}>
      <div className={`rate-popul ${popul}`}>
        <span>Выгодный</span>
      </div>
      <div>
        <div className="rate-title">
          <h2 className="rate-title__text">{title}</h2>
        </div>
        <div className="rate-subtitle">
          <p className="rate-subtitle__text">{subtitle}</p>
        </div>
        <div className="rate__text">
          {textMap}
        </div>
      </div>
      <div className="rate__bottom">
        <div className='rate-price'>
          <p className="rate-price__number">{price}</p>
          <img className="rate-price__ruble" src={ruble} alt="ruble" />
        </div>
        <div className="rate__btn">
          <button>Купить</button>
        </div>
      </div>
    </div>
  )
}
