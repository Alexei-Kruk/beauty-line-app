import React from "react";

import "./FooterMenu.css"

import CalendarIcon from "./img/calendar_icon.svg";
import ContactsIcon from "./img/contacts_icon.svg";
import AddIcon from "./img/add_icon.svg";
import ClockIcon from "./img/clock_icon.svg";
import MailIcon from "./img/mail_icon.png";


export const FooterMenu = (props) => {
    const iconMap = {
        "calendar": CalendarIcon,
        "contacts": ContactsIcon,
        "add": AddIcon,
        "clock": ClockIcon,
        "mail": MailIcon
    };

    return (
        <ul className="nav-list">
            {props.menuItems.map((item, index) => (
                <li
                    className="nav-list__item"
                    key={index}
                >
                    <a
                        href="#!"
                        className="nav__link"
                    >
                        <img
                            src={iconMap[item]}
                            alt={item}
                        />
                    </a>
                    
                </li>
            ))}
        </ul>

    );
}