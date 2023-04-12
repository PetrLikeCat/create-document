import React from 'react'
import { PopupHome } from '../PopupHome'

export const Main = ({active,setActive}) => {
    return (
        <div className="main">
            <div className="main-content">
                <h1 className="main-content__logo">Быстрое составление договоров</h1>
                <p className="main-content__text">OSNOVAPAY- это сервис который
                    дает заказчику возможность автоматизированно составлять договора, и заявления в суд.
                </p>
                <PopupHome active={active} setActives={setActive} />
                <button className="main-content__btn" onClick={() => setActive(true)}>Попробовать бесплатно</button>
            </div>

        </div>
    )
}
