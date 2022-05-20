import React from "react"
import { useState } from "react";


export default function Create(){
    const [subject, setSubject] = useState('')
    const [textPost, setTextPost] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const post = {subject, textPost, author}

        fetch('http://localhost:8000/api/post-create/', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post)
        }).then(() => {
            console.log("New Post Added")
        })
        console.log(post)

    }

    return (
        <div className="create">
            <h2>Post Something Interesting</h2>
            <form onSubmit={handleSubmit}>
                <label>Subject</label>
                <input 
                    type="text" 
                    required 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <label>Text Post</label>
                <textarea 
                    type="text" 
                    required 
                    value={textPost}
                    onChange={(e) => setTextPost(e.target.value)}
                />
                <label>Author</label>
                <input 
                    type="text" 
                    required 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button>Add Post</button>
            </form>
        </div>
    )
}
