import React from "react";
import { useHistory } from "react-router";

const Post = (props) => {
  const { id, title } = props.post;
  const history = useHistory();
  const showPost = (id) => {
    const url = `/post/${id}`;
    history.push(url);
  };
  return (
    <>
      <h3>
        <strong>id:{id}</strong>
      </h3>
      <p>{title}</p>
      <button onClick={() => showPost(id)}>show full post</button>
    </>
  );
};

export default Post;
