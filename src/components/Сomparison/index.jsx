import React from 'react'
import time from "..//../img/free-icon-time.svg"
import check from "..//../img/free-icon-check.svg"
export const Сomparison = () => {
    return (
        <div className="comparison__wrapper">
            <div>
                <h2 className="comparison__title">Сравнения с другими решениями</h2>
            </div>
            <div className="comparison">
                <div className="comparison-table">
                    <div className="comparison-table__title"><h4>Критерии</h4></div>
                    <div className="comparison-table__title"> <h4>Критерии</h4></div>
                    <div className="comparison-table__title"><h4>Критерии</h4></div>
                    <div className="comparison-table__criteria"><p>первый критерий</p></div>
                    <div className="comparison-table__criteria"><img src={check} alt="check" /></div>
                    <div className="comparison-table__criteria"><img src={check} alt="check" /></div>
                    <div className="comparison-table__criteria"><p>первый критерий</p></div>
                    <div className="comparison-table__criteria"><img src={check} alt="check" /></div>
                    <div className="comparison-table__criteria"><p> </p></div>
                    <div className="comparison-table__criteria"><p>первый критерий</p></div>
                    <div className="comparison-table__criteria"><p> </p></div>
                    <div className="comparison-table__criteria"><p> </p></div>
                </div>
                <div className="comparison-time">
                    <h3>Самое главное мы экономим время</h3>
                   <div className="comparison-time__img"><img src={time} alt="time" /></div>
                </div>
            </div>
        </div>
    )
}
