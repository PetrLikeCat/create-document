import React from 'react'
import boss from "..//../img/free-icon-boss.svg";
import store from "..//../img/free-icon-store.svg"
import enterprise from "..//../img/free-icon-enterprise.svg"
import { CardUsefull } from '..//../components/Usefull/CardUsefull';
export const Usefull = () => {
    const dateLocal = [
        {
            img: boss,
            title: "Управляющим компаниям",
            text: "Он поможет в автоматизации и отправке заявлений должников и можно будет хранить данных о них"
        },
        {
            img: store,
            title: "ЖКХ/ТСЖ",
            text: "Он поможет в автоматизации и отправке заявлений должников и можно будет хранить данных о них"
        },
        {
            img: enterprise,
            title: "Малый бизнес",
            text: "Он поможет в автоматизации и отправке заявлений должников и можно будет хранить данных о них"
        },
    ]

    const dateLocalMap = dateLocal.map((item, i) => <> <CardUsefull key={i} title={item.title} text={item.text} img={item.img} /></>)
    return (
        <div className="usefull">
            <h2 className="usefull__title">Кому мы будем полезны?</h2>
            <h4 className="usefull__subtitle">Наш сервис подходит организациям которым нужно<br /> быстро и не дорого составлять договора и заявления</h4>
            <div className="usefull__card">{dateLocalMap}</div>
        </div>
    )
}
