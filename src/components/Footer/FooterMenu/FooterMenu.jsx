import React, { useState } from "react";
import { List, ListItem } from "@mui/material";

import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

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

    const navMenu = [
        {
            icon: <CalendarMonthRoundedIcon />,
            path: '/',
            id: 1,
        },
        {
            icon: <PermContactCalendarRoundedIcon />,
            path: '/',
            id: 2,
        },
        {
            icon: <AddCircleOutlineRoundedIcon />,
            path: '/',
            id: 3,
        },
        {
            icon: <AccessTimeRoundedIcon />,
            path: '/',
            id: 4,
        },
        {
            icon: <MailIcon />,
            path: '/',
            id: 5,
        },
    ]

    // const [activeNavBtn, setActiveNavBtn] = useState(false);

    return (
        // <List>
        //     {
        //         navMenu.map((item, index) => (
        //             <ListItem>
        //                 <img
        //                     src={navMenu[]}
        //                 />
        //             </ListItem>
        //         ))
        //     }
        // </List>


        <ul className="nav-list">
            {props.menuItems.map((item, index) => (
                <li className="nav-list__item" key={index}>
                    <a href="#!" className="nav__link">
                        <img
                            className="img"
                            src={iconMap[item]}
                            alt={''}
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
};
