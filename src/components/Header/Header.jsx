import React from "react";
import { useLocation } from "react-router-dom";

import "./Header.css";

import Search_icon from "./img/search_icon.svg";
import Profile_icon from "./img/person_circle_icon.svg";


const pageTitles = {
    "/calendar": "Календарь",
    "/contacts": "Контакты",
    "/add-new-client": "Запись",
    "/waiting-list": "Лист ожидания",
    "/newsletter-for-clients": "Рассылка"
};

export default function Header() {
    const location = useLocation();
    const currentPage = location.pathname;
    const pageTitle = pageTitles[currentPage] || "Календарь";

    return (
        <div>
            <div className="header-container">
                <a href="#!" className="header-icon__item">
                    <img
                        className="header-profile__icon"
                        src={Profile_icon}
                        alt="Profile_icon"
                    />
                </a>
                <h1 className="header-title">
                    {pageTitle}
                </h1>
                <a href="#!" className="header-icon__item">
                    <img
                        className="header-search__icon"
                        src={Search_icon}
                        alt="Search_icon"
                    />
                </a>
            </div>   
        </div>
    );
}