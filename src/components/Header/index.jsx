import React from 'react'
import { Link } from 'react-router-dom';
import logo from "..//../img/logo.png";
import { PopupHome } from '../PopupHome';
export const Header = ({active,setActive}) => {

    // const [active, setActive] = React.useState(false)

    return (
        <header>
            <img className="header__logo" src={logo} alt="logo" />
            <ul className="main-menu">
                <li className="main-menu__item"><Link className="main-menu__link" to="/">Главная</Link></li>
                <li className="main-menu__item"><Link className="main-menu__link" to="/Date">Преимущества</Link></li>
                <li className="main-menu__item"><a className="main-menu__link" href="#">Тарифы</a></li>
                <li className="main-menu__item"><a className="main-menu__link" href="#">О нас</a></li>
            </ul>
            <div className="header-contactbar">
                <PopupHome active={active} setActives={setActive} />
                <a href="#" className="header-contactbar__enter"><button onClick={() => setActive(true)}>Войти</button></a>
                <a href="#" className="header-contactbar__phone">+7 (000)-000-00-00</a>
            </div>
        </header>
    )
}
