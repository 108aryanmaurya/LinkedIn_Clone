import React from "react";
import "../Sass/HomeComponent.scss";
import PostStatus from "./common/PostUpdate";
function HomeComponent({ post }) {
  return (
    <>
      <div className="home">
        <PostStatus post={post}></PostStatus>
      </div>
    </>
  );
}

export default HomeComponent;
