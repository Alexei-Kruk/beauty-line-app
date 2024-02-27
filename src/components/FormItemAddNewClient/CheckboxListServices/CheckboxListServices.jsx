import React, { useState } from 'react';
import "./CheckboxListServices.css";

export default function CheckboxListServices() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCheckboxList = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='checkboxList-container'>
            <button
                className='checkboxList-button'
                onClick={toggleCheckboxList}
            >
                Выберите услугу
            </button>

            {isOpen && (
                <div className='checkboxList-block'>
                    <input
                        type="checkbox"
                        id="manicure-treatment"
                        name="services"
                        value="manicure"
                    />
                    <label
                        className='checkboxList__item'
                        htmlFor="manicure-treatment"
                    >
                        Маникюр-обработка
                    </label>
                    
                    <br />
                    
                    <input
                        type="checkbox"
                        id="manicure-removal"
                        name="services"
                        value="manicure"
                    />
                    <label
                        className='checkboxList__item'
                        htmlFor="services"
                    >
                        Маникюр-снятие
                    </label>
                    
                    <br />
                    
                    <input
                        type="checkbox"
                        id="manicure-coating"
                        name="services"
                        value="manicure"
                    />
                    <label
                        className='checkboxList__item'
                        htmlFor="services"
                    >
                        Маникюр + покрытие
                    </label>
                    
                    <br />
                    
                    <input
                        type="checkbox"
                        id="pedicure-treatment"
                        name="services"
                        value="pedicure"
                    />
                    <label
                        className='checkboxList__item'
                        htmlFor="services"
                    >
                        Педикюр-обработка
                    </label>
                    
                    <br />
                    
                    <input
                        type="checkbox"
                        id="pedicure-removal"
                        name="services"
                        value="pedicure"
                    />
                    <label
                        className='checkboxList__item'
                        htmlFor="services"
                    >
                        Педикюр-снятие
                    </label>
                    
                    <br />
                    
                    <input
                        type="checkbox"
                        id="pedicure-coating"
                        name="services"
                        value="pedicure"
                    />
                    <label
                        className='checkboxList__item'
                        htmlFor="services"
                    >
                        Педикюр + покрытие
                    </label>
                    
                    <br />
                    
                    <input
                        type="checkbox"
                        id="pedicure-finger-coating"
                        name="services"
                        value="pedicure"
                    />
                    <label
                        className='checkboxList__item'
                        htmlFor="services"
                    >
                        Педикюр пальца + покрытие
                    </label>
                    
                    <br />
                    
                    <input
                        type="checkbox"
                        id="pedicure-full"
                        name="services"
                        value="pedicure"
                    />
                    <label
                        className='checkboxList__item'
                        htmlFor="services"
                    >
                        Педикюр полностью
                    </label>
                </div>
            )}
        </div>
    );
}