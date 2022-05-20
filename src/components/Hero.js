import React from "react"

export default function Hero() {
    return (
        <section className="hero">
            <div className="text">
                <h1 className="fitness--header">Welcome to FitComm</h1>
                <p className="Fitness--text">Need motivation? Looking to join the movement?
                Join fitness communities and dive into forums today!</p>
            </div>
            <img src="../images/fitness_gif.gif" className="fitness--gif" />
        </section>
    )
}