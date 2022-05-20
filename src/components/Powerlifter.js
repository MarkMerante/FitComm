import React, { useEffect } from "react"
import Create from "./Create"
import PostList from "./PostList"

export default function Powerlifter(){
    const [posts, setPosts] = React.useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/api/post-list/')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setPosts(data);
          })
    }, [])
    
    return (
        <div className="Powerlifter">
            <h2>Powerlifting Community</h2>
            <Create />
            {posts && <PostList posts={posts} />}
        </div>
    )
}
