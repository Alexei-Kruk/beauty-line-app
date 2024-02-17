import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import CalendarPage from "./pages/Calendar/Calendar";
import Contacts from "./pages/Contacts/Contacts";
import AddNewClient from "./pages/AddNewClient/AddNewClient";
import WaitingList from "./pages/WaitingList/WaitingList";
import NewsletterForClients from "./pages/NewsletterForClients/NewsletterForClients";
import Footer from "./components/Footer/Footer";

import "./styles/index.css";
import "./styles/colors.css";


export default function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                    <Routes>
                        <Route path="/calendar" element={<CalendarPage />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/add-new-client" element={<AddNewClient />} />
                        <Route path="/waiting-list" element={<WaitingList />} />
                        <Route path="/newsletter-for-clients" element={<NewsletterForClients />} />
                    </Routes>
                <Footer />
            </div>
        </Router>
    );
}
