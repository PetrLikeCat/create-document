import React from 'react'
import cross from "..//..//../img/cross.svg"
export const Question = ({ question, answer,}) => {
  return (
    <div className="quenstion">

      {/* <div className={`faq-question ${activeQuestion === 0 ? 'active' : ''}`}>
            <h3 onClick={() => handleQuestionClick(0)}>Сколько видов договоров есть на сайте?</h3>
            <div className="faq-answer">
              <p>4 основных и 7  не основных</p>
            </div>
          </div> */}
      <div className={`faq-question `}>
        <h3 >{question}</h3>
        <img src={cross} alt="cross" />
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}
{/* <div className="quenstion-item">
<div className="quenstion-item__text">
<p>{question}</p>
</div>
<div className="quenstion-item__wrapper">
  <div className="quenstion-item__cross active">+</div>
  {/* <div className="quenstion-item__minus">-</div> */}
// </div>
// </div>
// <div className="quenstion-answer">
// <p>{answer}</p>
// </div> */}