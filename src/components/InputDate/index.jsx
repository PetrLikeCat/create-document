import React from 'react'
import { Link } from 'react-router-dom'
import search from '..//../img/search.svg'

export const InputDate = () => {
    return (
        <div className="document-search__item">
            <p className="document-search__text">Поиск по вашим делам</p>
            <div className="document-search__wrappe">
                <div className="document-search__input">
                    <input type="text" />
                    <img src={search} alt="search" />
                </div>
                <button className="document-search__btn">найти</button>
                <button className="document-search__btn">сбросить</button>
                <Link to="/"><button className="document-search__btn">создать</button></Link>
            </div>
     
        </div>
    )
}
