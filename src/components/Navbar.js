import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul className="nav_links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Powerlifter">Powerlifters</Link></li>
                <li><Link to="/Bodybuilder">Bodybuilders</Link></li>
                <li><Link to="/Weigh_Watchers">Weight Watchers</Link></li>
                <li><Link to="/Cardio_Workouts">Cardio Workouts</Link></li>
                <li><Link to="/Nutrition">Nutrition</Link></li>
                <li><Link to="/Music">Music</Link></li>
            </ul>
            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
        </nav>
    )
}