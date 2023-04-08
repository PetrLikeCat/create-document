import React from 'react'
import logo from "..//../img/logo.png";
import vk from '..//../img/vk.svg'
import telegram from '..//../img/telegram.svg'
import youtube from '..//../img/youtube.svg'
export const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo" className="footer__logo" />
            <div className="footer-menu">
                <ul className="footer-menu__list">
                    <li className="footer-menu__item"><a href="#">Бонусы</a></li>
                    <li className="footer-menu__item"><a href="#">Все продукты </a></li>
                    <li className="footer-menu__item"><a href="#">Партнерская программа</a></li>
                    <li className="footer-menu__item"><a href="#">О компании</a></li>
                </ul>
                <ul className="footer-menu__list">
                    <li className="footer-menu__item"><a href="#">Возможности</a></li>
                    <li className="footer-menu__item"><a href="#">Скролинг </a></li>
                    <li className="footer-menu__item"><a href="#">Тарифы</a></li>
                </ul>
                <ul className="footer-menu__list">
                    <li className="footer-menu__item"><a href="#">Новости</a></li>
                    <li className="footer-menu__item"><a href="#">Компания </a></li>
                    <li className="footer-menu__item"><a href="#">Попробовать</a></li>
                </ul>
                <ul className="footer-menu__list">
                    <li className="footer-menu__item"><a href="#">Поддержка</a></li>
                    <li className="footer-menu__item"><a href="#">7 (000)-000-00-00</a></li>
                    <li className="footer-menu__item"><a href="#">Заказать звонок</a></li>
                    <li className="footer-menu__item"><a href="#">Написать в чат</a></li>
                </ul>
            </div>
            <div className="footer-connection">
                <span className="footer-connection__cookies">
                    Мы используем cookies, а так же <br /> следуем политикой обработки <br /> персональных данных
                </span>
                <div className='footer-connection__network'>
                    <img src={vk} alt="vk" />
                    <img src={telegram} alt="telegram" />
                    <img src={youtube} alt="youtube" />
                </div>
            </div>
        </footer>
    )
}
