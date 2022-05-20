import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Powerlifter from "./components/Powerlifter"

export default function App() {      
    return (
        <Router>
            <div>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/Powerlifter" element={<Powerlifter />} />
                        <Route exact path="/Bodybuilder" element={<Powerlifter />} />
                        <Route exact path="/Weigh_Watchers" element={<Powerlifter />} />
                        <Route exact path="/Cardio_Workouts" element={<Powerlifter />} />
                        <Route exact path="/Nutrition" element={<Powerlifter />} />
                        <Route exact path="/Music" element={<Powerlifter />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
