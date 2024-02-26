import React, { useState } from 'react';
import "./CheckboxListServices.css";

export default function CheckboxListServices() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCheckboxList = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden'; // Запретить прокрутку страницы
        } else {
            document.body.style.overflow = 'auto'; // Разрешить прокрутку страницы
        }

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
                        htmlFor="manicure-removal"
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
                        htmlFor="manicure-coating"
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
                        htmlFor="pedicure-treatment"
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
                        htmlFor="pedicure-removal"
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
                        htmlFor="pedicure-coating"
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
                        htmlFor="pedicure-finger-coating"
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
                        htmlFor="pedicure-full"
                    >
                        Педикюр полностью
                    </label>
                </div>
            )}
        </div>
    );
}