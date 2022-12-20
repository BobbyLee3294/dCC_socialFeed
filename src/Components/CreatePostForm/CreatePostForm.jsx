import { useState } from "react";
import "./CreatePostForm.css";

const CreatePostForm = (props) => {
  //**TODO #3: Create a form with 2 input fields. One for the user's name and one for the body of their post
  //Each should be bound to its own state variable */
  const [formName, setFormName] = useState("");
  const [formBody, setFormBody] = useState("");
  //**TODO #3a: Implement a handleSubmit method for your form. That function should create a new post object,
  // add it the existing array of posts and update the App.js state variable with the new array.*/
  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      name: formName,
      body: formBody,
    };
    // console.log(newPost);
    props.addNewPost(newPost);
  }

  return (
    <div className="container">
      <form id="post-form" onSubmit={handleSubmit}>
        <div className="mb-1 row">
          <label htmlFor="formName" className="col-sm-1">
            Name
          </label>
          <div className="col-sm-11">
            <input
              type="text"
              id="formName"
              value={formName}
              onChange={(event) => setFormName(event.target.value)}
            />
          </div>
        </div>
        <div className="mb-auto row">
          <label htmlFor="formBody" className="col-sm-1">
            Post
          </label>
          <div className="col-sm-11">
            <textarea
              id="formBody"
              placeholder="Write something.."
              value={formBody}
              maxLength="120"
              onChange={(event) => setFormBody(event.target.value)}
            />
          </div>
        </div>
          <input id="submit-btn" type="submit" value="Create" />
      </form>
    </div>
  );
};

export default CreatePostForm;
