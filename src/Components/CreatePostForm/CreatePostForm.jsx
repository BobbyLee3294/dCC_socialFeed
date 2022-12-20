import { useState } from "react";
import "./CreatePostForm.css";

const CreatePostForm = (props) => {
  //**TODO #3: Create a form with 2 input fields. One for the user's name and one for the body of their post
  //Each should be bound to its own state variable */
  const [userName, setUserName] = useState("");
  const [postBody, setPostBody] = useState("");
  //**TODO #3a: Implement a handleSubmit method for your form. That function should create a new post object,
  // add it the existing array of posts and update the App.js state variable with the new array.*/
  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      name: userName,
      body: postBody,
    };
    // console.log(newPost);
    props.addNewPost(newPost);
  }

  return (
    <div className="container">
      <form id="post-form" onSubmit={handleSubmit}>
        <div className="mb-1 row">
          <label htmlFor="userName" className="col-sm-1" id="labelName">
            Name
          </label>
          <div className="col-sm-11">
            <input
              type="text"
              id="postUserName"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
        </div>
        <div className="mb-auto row">
          <label htmlFor="postBody" className="col-sm-1" id="labelBody">
            Post
          </label>
          <div className="col-sm-11">
            <textarea
              id="postBody"
              placeholder="Write something.."
              value={postBody}
              maxLength="120"
              onChange={(event) => setPostBody(event.target.value)}
            />
          </div>
        </div>
          <input id="submit-btn" type="submit" value="Create" />
      </form>
    </div>
  );
};

export default CreatePostForm;
