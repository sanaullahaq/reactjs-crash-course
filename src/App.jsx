import Post from "./components/Post";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
// all the custom components must start with uppercase character,
// standard html components/tags starts with lowercase character.
// so for reactjs, it understand this is a custom components when the name starts with uppercase character

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler(event) {
    setModalIsVisible(false);
  }

  function showModalHandler(event) {
    setModalIsVisible(true);
  }

  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
      {/* <Post author="Sanaulla" text="ReactJS is awesome"/>
      <Post author="Sultana" text="Check out the full course"/>
      <Post author="Safinaz" text="Hey there"/> */}
      <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
    </main>
    </>
  );
}

export default App;
