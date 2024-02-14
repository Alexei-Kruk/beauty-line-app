import React from "react";
import Header from "./components/Header/Header";
import Calendar from "./pages/Calendar/Calendar";
import Footer from "./components/Footer/Footer";

import "./index.css";


export default function App() {
    return (
        <div className="app">
            <Header />
                <div>
                    <Calendar />
                </div>
            <Footer />
        </div>
    );
}
