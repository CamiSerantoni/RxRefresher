
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData} from 'react-router-dom'

function PostsList() {
 const posts = useLoaderData()
  /* This code would cause a infinitive loop, so we wont to use it */
  // fetch('http://localhost:8080/posts').then(response => response.json()).then(data => {
  //   setPosts(data.posts)
  // })

  


  return (
    <>
      {/* {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )} */}

      { posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      { posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet </h2>
          <p>start adding some!</p>
        </div>
      )}
  

    </>
  );
}

export default PostsList;
