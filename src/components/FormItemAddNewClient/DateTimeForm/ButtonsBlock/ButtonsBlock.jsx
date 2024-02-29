import React from 'react';

import './ButtonsBlock.css';

import SaveIcon from './../img/save_icon.svg';
import CancelIcon from './../img/cancel_icon.svg';


export default function ButtonsBlock() {
    return (
        <div>
            <button
                type="submit"
            >
                <img
                    className='img-dataForm color-green'
                    src={SaveIcon}
                    alt=''
                />
            </button>
            <button
                type="submit"
            >
                <img
                    className='img-dataForm color-red'
                    src={CancelIcon}
                    alt=''
                />
            </button>
        </div>
    )
}
