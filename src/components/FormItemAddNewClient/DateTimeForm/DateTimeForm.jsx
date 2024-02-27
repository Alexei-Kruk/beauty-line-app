import React from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './DateTimeForm.css';


export default function DateTimeForm() {
    return (
        <div className="dateTimeForm-container">
            <Datetime
                className='dateTime__item'
                input={true}
                timeFormat="HH:mm"
                dateFormat="DD-MM-YYYY"
            />           
        </div>
    )
}


