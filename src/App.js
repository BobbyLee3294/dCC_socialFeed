import React, { useState } from "react";
import PostList from "./Components/PostList/PostList";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      name: "Jimbo Jones",
      body: "This is my first post! Give me a like, please!",
    },
    {
      name: "Bartholomew Simpson",
      body: "Eat my shorts!",
    },
  ]);

  function addNewPost(entry) {
    let tempPosts = [entry, ...posts];
    setPosts(tempPosts);
  }
  return (
    <div className="App">
      <header>
        <div id="NavBar">
          <NavBar />
        </div>
      </header>
      <div className="container-md">
        <div className="row">
          <div className="border-box">
            <CreatePostForm addNewPost={addNewPost} />
          </div>
        </div>
        <div className="row">
          <div className="border-box">
            <PostList parentPosts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
