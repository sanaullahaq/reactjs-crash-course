import Post from "./components/Post";
import PostsList from "./components/PostsList";
// all the custom components must start with uppercase character,
// standard html components/tags starts with lowercase character.
// so for reactjs, it understand this is a custom components when the name starts with uppercase character
function App() {
  return (
    <main>
      {/* <Post author="Sanaulla" text="ReactJS is awesome"/>
      <Post author="Sultana" text="Check out the full course"/>
      <Post author="Safinaz" text="Hey there"/> */}
      <PostsList />
    </main>
  );
}

export default App;
