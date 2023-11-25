import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function NewPost({onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [eneteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHander(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHanlder(event) {
    event.preventDefault(); //This will prevent the browser from sending the HTTP request to the server on submit event
    const postData = {
      body: enteredBody,
      author: eneteredAuthor,
    };
    // console.log(postData)
    onAddPost(postData);
    // onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHanlder}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <textarea
            type="text"
            id="body"
            required
            onChange={changeAuthorHander}
          />
        </p>
        <p className={classes.actions}>
          {/* below both button will be worked as submit since both are inside a form.
        but we dont want it, so explicitly defined the 'Cancel button type='button',
        so that it will be normal regular button not submit button.
        On the other side 'Submit' button will be the responsibled to submit the form */}
          <Link to=".." type="button">
            {/* the tow dots means this function will navigate to one level up (same as cd .. in the cmd prompt) or to the parent route */}
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
