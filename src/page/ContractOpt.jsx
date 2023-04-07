import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ContraktTitle } from '../components/ContraktTitle'
import { Link } from 'react-router-dom'

export const ContractOpt = () => {
  const contract = [
    "Заявление гражданина(или индивидуального предпринимателя) о признании его банкротом",
    "Заявление гражданина(или индивидуального предпринимателя) о признании его банкротом",
    "Заявление гражданина(или индивидуального предпринимателя) о признании его банкротом",
    "Заявление гражданина(или индивидуального предпринимателя) о признании его банкротом",
    "Заявление гражданина(или индивидуального предпринимателя) о признании его банкротом",
    "Заявление гражданина(или индивидуального предпринимателя) о признании его банкротом",
    "Заявление гражданина(или индивидуального предпринимателя) о признании его банкротом",
    "Заявление гражданина(или индивидуального предпринимателя) о признании его банкротом",
    "Заявление гражданина(или индивидуального предпринимателя) о признании его банкротом",
  ]

  const contractMap = () => (
    contract.map((item, i) => <li className="contract-link__item"><Link to="#">{item}</Link></li>))
  return (
    <div className="contract">
      <div>
        <Header />
        <ContraktTitle />
        <ul className="contract-link">
          {contractMap()}
        </ul>
      </div>

      <Footer />
    </div>
  )
}
