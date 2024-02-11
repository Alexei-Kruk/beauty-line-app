import React from "react";
import { FooterMenu } from "./FooterMenu/FooterMenu";

import "./Footer.css"


export default function Footer() {
    const menuItems = [
        'Календарь',
        'Контакты',
        'Запись',
        'Бронь',
        'Рассылка'
    ];

    return (
        <nav className="footer-container">
            <FooterMenu menuItems={menuItems} />


            {/* <div className="footer-container">
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <a href="#!" className="nav__link">
                            <img
                                className="icon__margin"
                                src={Calendar_icon}
                                alt="Calendar_icon"
                            />
                            <span
                                className="footer-text"
                            >
                                Календарь
                            </span>
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#!" className="nav__link">
                            <img
                                className="icon__margin"
                                src={Contacts_icon}
                                alt="Contacts_icon"
                            />
                            <span
                                className="footer-text"
                            >
                                Контакты
                            </span>
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#!" className="nav__link">
                            <img
                                className="icon__add"
                                src={Add_icon}
                                alt="Add_icon"
                            />
                            <span
                                className="footer-text"
                            >
                                Запись
                            </span>
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#!" className="nav__link">
                            <img
                                className="icon__margin"
                                src={Calendar_with_clock}
                                alt="Calendar_with_clock"
                            />
                            <span
                                className="footer-text"
                            >
                                Бронь
                            </span>
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#!" className="nav__link">
                            <img
                                className="icon__mail"
                                src={Mail_icon}
                                alt="Mail_icon"
                            />
                            <span
                                className="footer-text"
                            >
                                Рассылка
                            </span>
                        </a>
                    </li>
                </ul>
            </div> */}
        </nav>
    );
}
