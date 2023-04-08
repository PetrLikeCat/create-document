import React from 'react'
import { Question } from './Question'
import { dateQuestion } from "./date.js"
export const Questions = () => {

  const [active, setActive] = React.useState(10)
  React.useEffect(() => {

  }, [])
  const handlSetActive = (id) => {
    setActive(id)
  }

  const dateMap = dateQuestion.map((item, i) =>
    <div>{<Question active={active} handlSetActive={handlSetActive} key={i} id={i} question={item.question} answer={item.answer} />}</div>
  )

  return (
    <div className="questions">
      <div className="questions-title" >
        <h2>Вопросы про продукт</h2>
        <h2>Другие вопросы</h2>
      </div>
      <div className="faq-container">
        <div className="questions-wrapper">{dateMap}</div>
      </div>
    </div>
  )
}
