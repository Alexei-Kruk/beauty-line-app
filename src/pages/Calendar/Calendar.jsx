import React from "react";

import Search_icon from "./img/search_icon.svg";
import "./Calendar.css";

export default function Calendar() {
    return (
        <div className="calendar-container">
            <h1 className="calendar-title">
                Календарь
            </h1>
            <a href="#!" className="calendar-icon__item">
                <img
                    className="calendar__icon"
                    src={Search_icon}
                    alt="Search_icon"
                />
            </a>
        </div>
    );
}
