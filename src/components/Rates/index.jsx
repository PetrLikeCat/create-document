import React from 'react'
import { CardRates } from './CardRates'

export const Rates = () => {
    const date = [
        {
            title: "Базовый",
            subtitle: "Если не нужна поддержка",
            text: ["Если не нужна  поддержка", "Если не нужна  поддержка", "Если не нужна  поддержка"],
            price: "10 999"
        },
        {
            title: "Премиум",
            subtitle: "Линния поддержки",
            text: ["Если не нужна  поддержка", "Если не нужна  поддержка", "Если не нужна  поддержка", "Если не нужна  поддержка", "Если не нужна  поддержка",],
            price: "14 999",
            popul: "active"
        },
        {
            title: "Премиум++",
            subtitle: "Поддержка, личный чат с нашим юристом",
            text: ["Если не нужна  поддержка", "Если не нужна  поддержка", "Если не нужна  поддержка", "Если не нужна  поддержка", , "Если не нужна  поддержка", "Если не нужна  поддержка", "Если не нужна  поддержка",],
            price: "30 999"
        },
    ]

    const dateMap = date.map((item, i) =>
        <><CardRates key={i} title={item.title} subtitle={item.subtitle} text={item.text} price={item.price} popul={item.popul} /></>
    )
    return (
        <div className="rates">
            <h2 className="rates-title">Тарифы</h2>
            <div className="rates-card">
                {dateMap}
            </div>
        </div>
    )
}
