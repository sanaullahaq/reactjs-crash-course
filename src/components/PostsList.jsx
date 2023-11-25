import Post from "./Post";
import classes from "./PostsList.module.css";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData()

  // useEffect() hook is used to minimize the side effect when the components executes.
  // e.g. here when we fetchig the data and changing the state thus the fetching method will run again and cause a infite loop.
  // but the useEffect() hook will be runed based on its dependency here it the empty [] array. so it will run once, does not matter how many times
  // the components runs. the depency can be altered from any where,
  // useEffect() hook function do not expect to return a promise, so async-await used in its inner function
  // useEffect(()=>{
  //   async function fetchPosts(){
  //     setIsFetching(true)
  //     const response = await fetch('http://localhost:8080/posts') //default request type is 'GET'
  //     const resData = await response.json()
  //     setPosts(resData.posts)
  //     setIsFetching(false)
  //   }
  //   fetchPosts()
  // }, [])

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setPosts((existingPosts) => [postData, ...existingPosts]);
    // inside the setPosts() we can diretly spread the list,
    // but it not sure that setPosts() will be called instantly whent he stage is changed,
    // there might a small delay or something like that,
    // so it is better approach to use ()=> inside setPosts() to supress that issue.
    console.log(posts);
  }

  return (
    <>


      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} text={post.body} author={post.author} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {/* {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts...</p>
        </div>
      )} */}
    </>
  );
}

export default PostsList;
