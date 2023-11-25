import { Link } from "react-router-dom";
// The Link element is same as <a>...</a> of html. but the Link element will not send a brand new request to the server to load entire brand new page rather it will simply load the component only to which it is linked
import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-posts" className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
