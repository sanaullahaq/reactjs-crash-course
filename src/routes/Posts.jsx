import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";
// all the custom components must start with uppercase character,
// standard html components/tags starts with lowercase character.
// so for reactjs, it understand this is a custom components when the name starts with uppercase character

function Posts() {
  return (
    <>
      <Outlet /> {/* This is just a place holder for child routes of the parent routes */}
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader(){
  const response = await fetch('http://localhost:8080/posts') //default request type is 'GET'
  const resData = await response.json()
  return resData.posts
}
