import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PostDetail = () => {
  const { postId } = useParams();
  const [bodys, setbodys] = useState({});
  const { title, body } = bodys;
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setbodys(data));
  }, []);
  console.log(bodys);
  return (
    <div>
      <h3>This is post {postId} detail</h3>
      <p>
        this title of this post is : <strong> {title}</strong>{" "}
      </p>
      <p>{body}</p>
    </div>
  );
};

export default PostDetail;
