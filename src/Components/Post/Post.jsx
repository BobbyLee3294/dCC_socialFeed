import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import "./Post.css";

const Post = (props) => {
  //**TODO #4: Build out the functionality of the "like" and "dislike"
  //create a function for each button when they are clicked then bind them to an onClick event*/
  //**TODO #4a: Figure out why first post buttons toggle */
  //**TODO #4b: Figure out how to have ONLY one button toggle at a time(ie: if like toggled on, then dislike is toggled off and vice versa) */
  //*BONUS TODO: add dates to all posts and post creations

    return (
    //**TODO #1: Create a template which will include the user's name, the body of the post and the "like" and "dislike" buttons */
    <div id="postLayout">
      <p id="postName">{props.post.name}</p>
      <span className="xyz">{`${new Date().toLocaleString()}`}</span>
      <p id="postBody">{props.post.body}</p>
      <LikeButton />
    </div>
  );
};

export default Post;
