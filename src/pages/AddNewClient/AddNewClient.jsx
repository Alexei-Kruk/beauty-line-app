import React, { useState } from 'react';
import { Formik } from "formik";
import "./AddNewClient.css";

import PhoneInput from '../../components/FormItemAddNewClient/PhoneInput/PhoneInput';
import CheckboxListServices from '../../components/FormItemAddNewClient/CheckboxListServices/CheckboxListServices';
import DateTimeForm from '../../components/FormItemAddNewClient/DateTimeForm/DateTimeForm';


export default function AddNewClient() {
    return (
        <div className="addNewClient-container">
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = "Invalid email address";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} className="form-container" >
                        <p className="form-text">
                            Имя клиента
                        </p>
                        <input
                            className="form-item"
                            type="text"
                            name="name"
                            placeholder="Введите имя"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // value={values.email}
                        />
                        {/* {errors.email && touched.email && errors.email} */}
                       
                        <p className="form-text">
                            Номер телефона клиента
                        </p>

                        <PhoneInput />
                        
                        <p className="form-text">
                            Оказываемая услуга
                        </p>
                        
                        <CheckboxListServices />
                        
                        <p className="form-text">
                            Дата и время
                        </p>

                        <DateTimeForm />

                        <p className="form-text">
                            Комментарий (при необходимости)
                        </p>
                        <input
                            className="form-item"
                            type="text"
                            name="comment"
                            placeholder="Комментарий"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // value={values.password}
                        />
                        {/* {errors.password && touched.password && errors.password} */}
                        
                        <button
                            className="form-btn form-btm__margin"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Записать
                        </button>
                        
                        <button
                            className="form-btn-white"
                            type="cancel"
                            disabled={isSubmitting}
                        >
                            Стереть
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
