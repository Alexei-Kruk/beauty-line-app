import React, { useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ruRU from 'date-fns/locale/ru';

import "./CalendarItem.css";


const locales = {
    "ru-RU": ruRU,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,   
});

const events = [
    {
        title: "Светлана",
        start: new Date(2024, 1, 15),
        end: new Date(2024, 1, 15),
    },
    {
        title: "Кристина",
        start: new Date(2024, 1, 16),
        end: new Date(2024, 1, 16),
    },
    {
        title: "Елена",
        start: new Date(2024, 1, 19),
        end: new Date(2024, 1, 19),
    },
];


export default function CalendarItem() {
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
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
            />
        </div>
    );
}