import React from 'react'

export const Court = () => {
    return (
        <div className="side-content">
            <div className="side-plaintiff">
                <h3>Истец</h3>
                <p>Прохорова Ирина Александрова</p>
                <p>Улица Мира 16 дом 56а</p>
                <p>Сумма дела: 11 586.90 руб.</p>
                <p>Телефон: 8 909 576 58 22</p>
                <p>Пени: 0</p>
            </div>
            <div className="side-defendant">
                <h3>Ответчик</h3>
                <p>Прохоров Андрей </p>
                <p>Улица Мира 16 дом 56а</p>
                <p>Сумма дела: 11 586.90 руб.</p>
                <p>Телефон: 8 909 576 58 22</p>
                <p>Пени: 0</p>
            </div>
        </div>
    )
}
