import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import "./Post.css";

const Post = (props) => {
  //**TODO #4: Build out the functionality of the "like" and "dislike"
  //create a function for each button when they are clicked then bind them to an onClick event*/
  //**TODO #4a: Figure out why first post buttons toggle */
  //**TODO #4b: Figure out how to have ONLY one button toggle at a time(ie: if like toggled on, then dislike is toggled off and vice versa) */

  const [likeactive, setLikeactive] = useState(false);
  const [dislikeactive, setDislikeactive] = useState(false);

  function likeFunction() {
    if (likeactive) {
      setLikeactive(false);
    } else {
      setLikeactive(true);
      if (dislikeactive) {
        setDislikeactive(false);
      }
    }
  }

  function dislikeFunction() {
    if (dislikeactive) {
      setDislikeactive(false);
    } else {
      setDislikeactive(true);
      if (likeactive) {
        setLikeactive(false);
      }
    }
  }
  return (
    //**TODO #1: Create a template which will include the user's name, the body of the post and the "like" and "dislike" buttons */
    <div id="postLayout">
      <p id="postName">{props.post.name}</p>
      <p id="postBody">{props.post.body}</p>
      <button
        onClick={likeFunction}
        className={[likeactive ? "likeactive" : null, "button"].join(" ")}
      >
        <FaThumbsUp />
      </button>
      <button
        onClick={dislikeFunction}
        className={[dislikeactive ? "dislikeactive" : null, "button"].join(" ")}
      >
        <FaThumbsDown />
      </button>
    </div>
  );
};

export default Post;
