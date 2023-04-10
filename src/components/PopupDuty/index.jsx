import React from 'react'
import { Link } from 'react-router-dom'
// import { InputPopup } from './InputPopup'
import close from "..//../img/close.png"
export const PopupDuty = ({ popup, setPopup }) => {
    return (
        <div className={popup ? 'popup active' : "popup"} onClick={() => setPopup(false)}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="popup-title__wrapper">
                    <h3 className="popup__title">Пробная верисия</h3>
                    <img className="popup-cross" src={close} alt="close" onClick={() => setPopup(false)} />
                </div>
                <p className="popup__text">Демоверсия позволяет лично оценить все возможности продукта.
                    Отправьте заявку и получите доступ к демоверсии.
                    Менеджер свяжется с вами в течение трех часов с 7.00 до 16.00 по MCK в рабочие дни.
                    Если вам нужна полноценная, но разовая проверка организации.</p>
                <div className="input-popup__wrapper">
                    {/* <InputPopup title="Контактное лицо" />
                <InputPopup title="Почта" />
                <InputPopup title="Номер телефона" />
                <InputPopup title="Название организации" /> */}
                </div>
                <p className="popup__account"><span><a href="#">Нажмите здесь</a></span>, если у вас уже есть аккаунт</p>
                <Link to="/Date" className="popup-next"><button className="popup-next__button">Дальше</button> </Link>
                <p className="popup__cookies">Нажав на эту кнопку, вы соглашаетесь на  обработку персональных данных</p>
            </div>
        </div>
    )
}
