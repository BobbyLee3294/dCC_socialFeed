import React, { useState } from "react";
import PostList from "./Components/PostList/PostList";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import NavBar from "./Components/NavBar/NavBar";
// import './Components/App.css';

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
          <PostList  parentPosts={posts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
