import React from 'react'
import { DocumentSort } from '../components/DocumentSort'
import { DocumentTime } from '../components/DocumentTime'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { InputDate } from '../components/InputDate'
import { Documents } from '../components/Documents'
const dateSort = [{
  id: 0,
  title: "Фильтр",
  variants: ["В судах", "В ССП", "В банках", "Претензии", "Соглашения", "Действующие соглашения", "Исключить действующие соглашения", "Неотработанные", "Комментарии"]
},
{
  id: 1,
  title: "Судебная работа",
  variants: ["Все дела", "Без статуса", "В банках", "Претензии", "Соглашения", "Действующие соглашения", "Исключить действующие соглашения", "Неотработанные", "Комментарии"]
},
{
  id: 2,
  title: "По статусу",
  variants: ["Все дела", "Без статуса", "В банках", "Претензии", "Соглашения", "Действующие соглашения", "Исключить действующие соглашения", "Неотработанные", "Комментарии"]
},
{
  id: 3,
  title: "Должники",
  variants: ["Все дела", "Без статуса", "В банках", "Претензии", "Соглашения", "Действующие соглашения", "Исключить действующие соглашения", "Неотработанные", "Комментарии"]
},
{
  id: 4,
  title: "Участок",
  variants: ["Все дела", "Без статуса", "В банках", "Претензии", "Соглашения", "Действующие соглашения", "Исключить действующие соглашения", "Неотработанные", "Комментарии"]
},
]
export const DateDocument = () => {
  const dateMap = dateSort.map((item, i) => <li>
    {<DocumentSort title={item.title} variants={item.variants} />}
  </li>)

  return (
    <div className="document">
      <Header />
      <div className="document-title">
        <h1>Панель управления вашими делами</h1>
      </div>
      <div className="document-search">
        <InputDate />
      </div>
      <div className="document-sort">
        {dateMap}
      </div>
      <div>
        {<DocumentTime />}
      </div>
      <Documents />
      <Footer />
    </div>
  )
}
