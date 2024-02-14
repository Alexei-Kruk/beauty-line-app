import React from "react";

import "./FooterMenu.css";

import CalendarIcon from "./img/calendar_icon.svg";
import ContactsIcon from "./img/contacts_icon.svg";
import AddIcon from "./img/add_icon.svg";
import ClockIcon from "./img/clock_icon.svg";
import MailIcon from "./img/mail_icon.svg";


export const FooterMenu = (props) => {
    const iconMap = {
        "Календарь": CalendarIcon,
        "Контакты": ContactsIcon,
        "Запись": AddIcon,
        "Бронь": ClockIcon,
        "Рассылка": MailIcon,
    };

    return (
        <ul className="nav-list">
            {props.menuItems.map((item, index) => (
                <li className="nav-list__item" key={index}>
                    <a href="#!" className="nav__link">
                        <img
                            className="img"
                            src={iconMap[item]}
                            alt={''}
                        />
                        <span className="footer-text">
                            {/* {item} */}
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    );
};
