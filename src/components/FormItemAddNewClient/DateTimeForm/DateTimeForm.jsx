import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import ButtonsBlock from './ButtonsBlock/ButtonsBlock';

import './DateTimeForm.css';
import './CustomStyleCalendar.css';


export default function DateTimeForm() {
    const flatpickrRef = useRef(null);

    const Russian = require("flatpickr/dist/l10n/ru.js").default.ru;

    flatpickr.localize(Russian);

    useEffect(() => {
        flatpickr(flatpickrRef.current, {
            enableTime: true,
            dateFormat: "Y-m-d H:i",
            time_24hr: true,
            altInput: true,
            altFormat: "F j, Y",
            // disableMobile: "true",
            locale: {
                firstDayOfWeek: 1,
            }
        });
    }, []);

    return (
        <div className="dateTimeForm-container">
            <input
                placeholder="Выберите дату"
                ref={flatpickrRef}
                type="text"
            />

            <ButtonsBlock />
        </div>
    )
}


