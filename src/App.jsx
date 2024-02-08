import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Calendar from "./pages/Calendar/Calendar";


import "./index.css";


export default function App() {
    return (
        <div className="body app">
            <Calendar />
            <Navbar />
        </div>
    );
}
