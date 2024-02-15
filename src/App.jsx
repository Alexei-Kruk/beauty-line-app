import React from "react";
import { Route, Routes } from 'react-router-dom'
import { ReactDOM } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Calendar from "./pages/Calendar/Calendar";
import Contacts from "./pages/Contacts/Contacts";
import AddNewClient from "./pages/AddNewClient/AddNewClient";
import WaitingList from "./pages/WaitingList/WaitingList";
import NewsletterForClients from "./pages/NewsletterForClients/NewsletterForClients";

import Footer from "./components/Footer/Footer";

import "./index.css";


export default function App() {
    return (
        <div className="app">
            {/* <Routes>
                <Route element={<Header />} />
            </Routes> */}


            <Header />
                <div>
                    <Calendar />
                    {/* <Contacts /> */}
                    {/* <AddNewClient /> */}
                    {/* <WaitingList /> */}
                </div>
            <Footer />
        </div>
    );
}
