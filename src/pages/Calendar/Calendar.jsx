import React, { useState } from "react";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { ru } from "date-fns/locale";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from 'moment';
import 'moment/locale/ru';

import "./Calendar.css";


const russianDaysOfWeek = {
    "Sunday": "ВС",
    "Monday": "ПН",
    "Tuesday": "ВТ",
    "Wednesday": "СР",
    "Thursday": "ЧТ",
    "Friday": "ПТ",
    "Saturday": "СБ",
};

const locales = {
    "ru": {
        ...ru,
        ...russianDaysOfWeek,
    },
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
    getDay,
    locales,  
    moment
});

const events = [
    {
        title: "Светлана",
        start: new Date(2024, 1, 19),
        end: new Date(2024, 1, 19),
    },
    {
        title: "Кристина",
        start: new Date(2024, 1, 20),
        end: new Date(2024, 1, 20),
    },
    {
        title: "Елена",
        start: new Date(2024, 1, 21),
        end: new Date(2024, 1, 21),
    },
    {
        title: "Татьяна",
        start: new Date(2024, 1, 21),
        end: new Date(2024, 1, 21),
    },
];


export default function CalendarPage() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date(allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);

            if (
                ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                    (d4 <= d3) )
            )
                {   
                    alert("CLASH"); 
                    break;
                }
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="calendarItem-container">
            <Calendar
                defaultView={'month'}
                views={['month', 'week', 'day', 'agenda']}
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                messages={{
                    allDay: 'Весь день',
                    previous: '<',
                    next: '>',
                    today: 'Сегодня',
                    month: 'Месяц',
                    week: 'Неделя',
                    day: 'День',
                    agenda: 'Агенда',
                    date: 'Дата',
                    time: 'Время',
                    event: 'Событие',
                }}
            />
        </div>
    );
}