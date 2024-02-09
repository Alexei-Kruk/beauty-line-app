import React, { useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./CalendarItem.css";


const locales = {
    "ru-RU": require("date-fns/locale/ru")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2024, 1, 9),
        end: new Date(2024, 1, 9),
    },
    {
        title: "Vacation",
        start: new Date(2024, 1, 10),
        end: new Date(2024, 1, 10),
    },
    {
        title: "Conference",
        start: new Date(2024, 1, 12),
        end: new Date(2024, 1, 13),
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