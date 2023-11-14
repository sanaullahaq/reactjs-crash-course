import Post from "./Post";
import classes from "./PostsList.module.css";
function PostsList(props) {
  return (
    <ul className={classes.posts}>
      <Post author="Sanaulla" text="ReactJS is awesome" />
      <Post author="Sultana" text="Check out the full course" />
      <Post author="Safinaz" text="Hey there" />
    </ul>
  );
}

export default PostsList;
