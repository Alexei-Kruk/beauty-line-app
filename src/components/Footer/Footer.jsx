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
        </nav>
    );
}
