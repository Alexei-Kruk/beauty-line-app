import React from "react";

import "./Navbar.css"

import Calendar_icon from "./img/calendar_icon.svg";
import Contacts_icon from "./img/contacts_icon.svg";
import Add_icon from "./img/add_icon.svg";
import Calendar_with_clock from "./img/clock_icon.svg";
import Person_icon from "./img/person_circle_icon.svg";


export default function Navbar() {
    return (
        <nav>
            <div className="navbar-container">
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <a href="#!" className="nav__link">
                            <img
                                className="icon__margin"
                                src={Calendar_icon}
                                alt="Calendar_icon"
                            />
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#!" className="nav__link">
                            <img
                                className="icon__margin"
                                src={Contacts_icon}
                                alt="Contacts_icon"
                            />
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#!" className="nav__link">
                            <img
                                className="icon__margin icon__add"
                                src={Add_icon}
                                alt="Add_icon"
                            />
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#!" className="nav__link">
                            <img
                                className="icon__margin"
                                src={Calendar_with_clock}
                                alt="Calendar_with_clock"
                            />
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#!" className="nav__link">
                            <img
                                className="icon__margin"
                                src={Person_icon}
                                alt="Person_icon"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
