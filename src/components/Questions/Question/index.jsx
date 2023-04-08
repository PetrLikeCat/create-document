import React from 'react'
import cross from "..//..//../img/cross.svg"
export const Question = ({ id, active, question, answer, handlSetActive }) => {
  return (
    <div className="quenstion">
      <div onClick={() => handlSetActive(id)}>
        <div className={`faq-question`}>
          <h3>{question}</h3>
          <img src={cross} alt="cross" />
          
        </div>
        <div className={`faq-answer ${active === id ? "faq-answer active" : "faq-answer"}`}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

  // const [active, setActive] = React.useState("")\

  // React.useEffect(() => {
  //   const handle = () => {
  //     if (active === id) {
  //       setLocalClass("active")
  //     }
  //   }
  // }, [active])

  // const handlSetActive =()=>{
  //   setActive("active")
  // }  
  // let classAns = "active"
  // React.useEffect(() => {
  //   if (active === id) {
  //     classAns = "active"
  //   }
  // }, [active])


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