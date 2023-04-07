import React from 'react'
import { Question } from './Question'

export const Questions = () => {
  const date = [
    {
      question: "Сколько видов договоров есть на сайте?",
      answer: "Много но есть ещё больше",
    },
    {
      question: "Сколько видов договоров есть на сайте?",
      answer: "Много но есть ещё больше",
    },
    {
      question: "Сколько видов договоров есть на сайте?",
      answer: "Много но есть ещё больше",
    },
    {
      question: "Сколько видов договоров есть на сайте?",
      answer: "Много но есть ещё больше",
    },
    {
      question: "Сколько видов договоров есть на сайте?",
      answer: "Много но есть ещё больше",
    },
    {
      question: "Сколько видов договоров есть на сайте?",
      answer: "Много но есть ещё больше",
    },
    {
      question: "Сколько видов договоров есть на сайте?",
      answer: "Много но есть ещё больше",
    },
    {
      question: "Сколько видов договоров есть на сайте?",
      answer: "Много но есть ещё больше",
    },
  ]


  const [activeQuestion, setActiveQuestion] = React.useState(0);

  const dateMap = date.map((item, i) =>
    <div>{<Question activeQuestion={activeQuestion}  key={i} question={item.question} answer={item.answer} />}</div>
  )
  // const handleQuestionClick = (index) => {
  //   if (index === activeQuestion) {
  //     setActiveQuestion(null);
  //   } else {
  //     setActiveQuestion(index);
  //   }
  // }
  return (
    <div className="questions">
      <div className="questions-title">
        <h2>Вопросы про продукт</h2>
        <h2>Другие вопросы</h2>
      </div>
      <div className="faq-container">
        <div className="questions-wrapper">{dateMap}</div>
      </div>
    </div>
  )
}
