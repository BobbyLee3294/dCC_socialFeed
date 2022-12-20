import Post from "../Post/Post";
const PostList = ({parentPosts}) => {
  return (
    //**TODO #2: Create the feed where all the posts will be displayed.
    // Must be passed into using props. Utilize the map higher order array method to map each post to its own Post component */
    <div>
      {parentPosts.map(
        (post, index) => (
          <Post key={index} post={post}/>
        )
      )}
    </div>
  );
};

export default PostList;
