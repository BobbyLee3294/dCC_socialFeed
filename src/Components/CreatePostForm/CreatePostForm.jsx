import { useState } from "react";

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
      userName: userName,
      postBody: postBody,
    };
    // console.log(newPost);
    props.addNewPostProperty(newPost);
  }

  return (
    <div class="container">
      <form action="action_page.php" onSubmit={handleSubmit}>
        <div class="mb-3 row">
          <label for="userName" className="col-sm-1">
            Name
          </label>
          <div class="col-sm-11">
            <input
              type="text"
              id="postUserName"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              size="50"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="postBody" className="col-sm-1">
            Post
          </label>
          <div class="col-sm-11">
            <textarea
              id="postBody"
              placeholder="Write something.."
              value={postBody}
              rows="4"
              maxLength="500"
              onChange={(event) => setPostBody(event.target.value)}
            />
          </div>
        </div>
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default CreatePostForm;