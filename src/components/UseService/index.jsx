import React from 'react'
import { Card } from './Card/Card'
import cardImg1 from "..//../img/free-icon-file-60492 (1) 1.png";
import cardImg2 from "..//../img/free-icon-file1.png"
import cardImg3 from "..//../img/free-icon-file.png"
export const UseService = () => {
    const date = [
        {
            id: 1,
            title: "Регистрация или вход ",
            text: "Для использования нашего сервиса нужно бесплатно авторизоваться или войти и сохранить о вас данные",
            img: cardImg1
        },
        {
            id: 2,
            title: "Заполнение договора ",
            text: "После этого вы выбираете нужный вам договор и мы автоматически вставляем ваши данные в документ, в который нужно будет лишь дополнить не достающую информацию ",
            img: cardImg2
        },
        {
            id: 3,
            title: "Скачивания или отправка",
            text: "Дальше вы сможете спокойно его сохранить, скачать или отправить этот документ, через наш сервис",
            img: cardImg3
        },
    ]

    const cardMap = date.map((item, i) => (<li className="useService-card">
        {<Card key={i} title={item.title} img={item.img} text={item.text} />}
    </li>
    ))
    return (
        <div className="useService">
            <h2 className="useService__title">Как пользоваться нашим сервисом</h2>
            <ul className="useService__content">{cardMap}</ul>
        </div>
    )
}
