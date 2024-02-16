import React from "react";
import "./Header.css";

import Search_icon from "./img/search_icon.svg";
import Profile_icon from "./img/person_circle_icon.svg";


export default function Header() {
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
                    Запись клиента
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
