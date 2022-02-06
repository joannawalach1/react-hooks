import React, { useState, useEffect } from 'react';
import Axios from "axios";

function Post() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const posts = data;
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>-----------------------------</h1>
      <h2>Typicode</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
          <p>...............................</p>
        </div>
      ))}
    </div>
  );
}


export default Post;
