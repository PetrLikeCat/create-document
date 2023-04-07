import React from 'react'
import { MarketItem } from './MarketItem'

export const Market = () => {
    const date = [
        {
            title: "Надежность",
            text: "Более 100 тыс. составленных договоров"
        },
        {
            title: "Автоматизация",
            text: "Все делается автоматически"
        },
        {
            title: "24/7",
            text: "Работаем всё время, без человеческого фактора."
        },
        {
            title: "Большой выбор",
            text: "Покрывает 94% всех видов договоров"
        },
    ]

    const dateItem = date.map((item, i) =>
        <><MarketItem key={i} title={item.title} text={item.text} /></>
    )
    return (
        <div className="market">
            <h3>
                Почему мы лучшее решение на рынке?
            </h3>
            <div className="market-wrapper">{dateItem}</div>
        </div>
    )
}
