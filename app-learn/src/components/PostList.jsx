import React, { useState } from "react";
import PostItem from "./PostItem";

function PostList({ posts, title, remove }) {
  console.log(posts);
  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: "monospace" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id + Math.random()}
        />
      ))}
    </>
  );
}

export default PostList;
