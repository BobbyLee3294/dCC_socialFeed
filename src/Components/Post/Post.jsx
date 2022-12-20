import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import "./Post.css";

const Post = (props) => {
  //**TODO #4: Build out the functionality of the "like" and "dislike"
  //create a function for each button when they are clicked then bind them to an onClick event*/
  function thumbsUpToggle() {
    document.getElementById("thumbsUp").classList.toggle("likeColored");
  }
  function thumbsDownToggle() {
    document.getElementById("thumbsDown").classList.toggle("dislikeColored");
  }
  return (
    //**TODO #1: Create a template which will include the user's name, the body of the post and the "like" and "dislike" buttons */
    <div id="postLayout">
      <p id="postName">{props.post.name}</p>
      <p id="postBody">{props.post.body}</p>
      <button id="thumbsUp" onClick={thumbsUpToggle}>
        <FaThumbsUp />
      </button>
      <button id="thumbsDown" onClick={thumbsDownToggle}>
        <FaThumbsDown />
      </button>
    </div>
  );
};

export default Post;
