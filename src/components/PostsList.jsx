import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";

function PostsList(props) {
  const [enteredBody, setEnteredBody] = useState('')
  const [eneteredAuthor, setEnteredAuthor] = useState('')

  function changeBodyHandler(event){
    setEnteredBody(event.target.value)
  }

  function changeAuthorHander(event){
    setEnteredAuthor(event.target.value)
  }

  return (
    <>
    <NewPost changeBodyHandler={changeBodyHandler} changeAuthorHander={changeAuthorHander}/>
    <ul className={classes.posts}>
      <Post author={eneteredAuthor} text={enteredBody} />
      <Post author="Sultana" text="Check out the full course" />
      <Post author="Safinaz" text="Hey there" />
    </ul>
    </>
  );
}

export default PostsList;
