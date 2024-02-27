import React from 'react';
import InputMask from 'react-input-mask';

import './PhoneInput.css';


export default function PhoneInput() {
    return (
        <div className='phoneInput-container'>
            <InputMask
                className='maskFormPhone'
                mask="+375 (99) 999-99-99"
                maskChar="_"
                placeholder='+375 (__) ___-__-__'
                id="phone"
                type="text"
            />
        </div>
    );
}
