import Post from "./Post";
import classes from './PostsList.module.css'



function PostList(props) {
  return (
    <ul className={classes.posts}>

        <Post author="maximilian" body="react js is awesome " />
        <Post author="manu" body="react js is   noooooot awesome " />
      
    </ul>
  );
}

export default PostList;