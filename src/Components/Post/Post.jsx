import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
const Post = (props) => {
  return (
    //**TODO #1: Create a template which will include the user's name, the body of the post and the "like" and "dislike" buttons */
    //**TODO #4: Build out the functionality of the "like" and "dislike" 
    //create a function for each button when they are clicked then bind them to an onClick event*/
    <div id="postLayout">
      <p id="postName">Name of poster</p>
      <p id="postBody">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        consequat dictum lorem orci aliquam.
      </p>
      <button id="thumbsUp">
        <FaThumbsUp />
      </button>
      <button id="thumbsDown">
        <FaThumbsDown />
      </button>
    </div>
  );
};

export default Post;
