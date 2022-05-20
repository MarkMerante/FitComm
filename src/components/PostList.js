const PostList = ({ posts }) => {
    return (
      <div className="post-list">
        {posts.map(post => (
          <div className="post-preview" key={post.id} >
            <h2>{ post.subject }</h2>
            <p>{ post.textPost }</p>
            <span>Written by { post.author }</span>
          </div>
        ))}
      </div>
    );
  }
   
  export default PostList;