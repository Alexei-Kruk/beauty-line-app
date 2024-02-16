import React from "react";
import { Formik } from "formik";
import "./AddNewClient.css";


export default function AddNewClient() {
    return (
        <div className="addNewClient-container">
            <Formik
                // initialValues={{ email: "", password: "" }}
                // validate={(values) => {
                //     const errors = {};
                //     if (!values.email) {
                //         errors.email = "Required";
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                //             values.email
                //         )
                //     ) {
                //         errors.email = "Invalid email address";
                //     }
                //     return errors;
                // }}
                // onSubmit={(values, { setSubmitting }) => {
                //     setTimeout(() => {
                //         alert(JSON.stringify(values, null, 2));
                //         setSubmitting(false);
                //     }, 400);
                // }}
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
                        <input
                            className="form-item"
                            type="text"
                            name="name"
                            placeholder="Имя"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // value={values.email}
                        />
                        {/* {errors.email && touched.email && errors.email} */}
                        <input
                            className="form-item"
                            type="number"
                            name="phone"
                            placeholder="Номер телефона"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // value={values.password}
                        />
                        {/* {errors.password && touched.password && errors.password} */}
                        <input
                            className="form-item"
                            type="text"
                            name="service"
                            placeholder="Услуга"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // value={values.password}
                        />
                        <input
                            className="form-item"
                            type="text"
                            name="date"
                            placeholder="Дата"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // value={values.password}
                        />
                        <input
                            className="form-item"
                            type="text"
                            name="time"
                            placeholder="Время"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // value={values.password}
                        />
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
                            className="form-btn"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Записать
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
