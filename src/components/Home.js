import React from "react"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"

export default function Home() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    }) 

    return (
        <div>
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>  
    )
}