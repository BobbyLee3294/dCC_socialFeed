import React, { useState } from "react";
import Post from "./Components/Post/Post";
import PostList from "./Components/PostList/PostList";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import NavBar from "./Components/NavBar/NavBar";
// import './Components/App.css';

function App() {
  const [post, setPost] = useState([
    {
      name: "Jimbo Jones",
      post: "This is my first post! Give me a like, please!",
    },
  ]);

  function addNewPost(entry) {
    let tempPosts = [entry, ...post];
    setPost(tempPosts);
  }
  return (
    <div className="App">
      <div className="container-fluid">
        <div id="NavBar">
          <NavBar />
        </div>
      </div>
      <div className="container-md">
        <div className="row">
          <CreatePostForm addNewPost={addNewPost} />
        </div>
        <div className="row">
          <Post />
          <PostList />
        </div>
      </div>
    </div>
  );
}

export default App;
