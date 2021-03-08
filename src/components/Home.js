import React, { useEffect, useState } from "react";
import Post from "./Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      <h1>This is Home!</h1>
      <h3>i have {posts.length} posts!</h3>

      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </>
  );
};

export default Home;
