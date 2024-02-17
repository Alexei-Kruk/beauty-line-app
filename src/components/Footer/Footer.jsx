import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Footer.css"

import CalendarIcon from "./img/calendar_icon.svg";
import ContactsIcon from "./img/contacts_icon.svg";
import AddIcon from "./img/add_icon.svg";
import ClockIcon from "./img/clock_icon.svg";
import MailIcon from "./img/mail_icon.svg";


const navItems = [
    { to: "/calendar", imgSrc: CalendarIcon },
    { to: "/contacts", imgSrc: ContactsIcon },
    { to: "/add-new-client", imgSrc: AddIcon },
    { to: "/waiting-list", imgSrc: ClockIcon },
    { to: "/newsletter-for-clients", imgSrc: MailIcon }
];


export default function Footer() {
    const location = useLocation();
    const [activeNavItem, setActiveNavItem] = useState(location.pathname);

    const handleItemClick = (to) => {
        setActiveNavItem(to);
    };


    return (
        <nav className="footer-container">
            <ul className="nav-list">
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`nav-list__item $\{activeNavItem === item.to ? "active" : ""}`}
                    >
                        <Link to={item.to} onClick={() => handleItemClick(item.to)}>
                            <img
                                className="img"
                                src={item.imgSrc}
                                alt=""
                            />
                            {activeNavItem === item.to && <div className="active-dot"></div>}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
