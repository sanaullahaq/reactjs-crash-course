import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  // const [enteredBody, setEnteredBody] = useState("");
  // const [eneteredAuthor, setEnteredAuthor] = useState("");

  // function changeBodyHandler(event) {
  //   setEnteredBody(event.target.value);
  // }

  // function changeAuthorHander(event) {
  //   setEnteredAuthor(event.target.value);
  // }

  // function submitHanlder(event) {
  //   event.preventDefault(); //This will prevent the browser from sending the HTTP request to the server on submit event
  //   const postData = {
  //     body: enteredBody,
  //     author: eneteredAuthor,
  //   };
  // }

  return (
    <Modal>
      {/* The "react-router-dom" Form will stop the browser from default submit request and will execute the action related to the router path in main.jsx file*/}
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <textarea type="text" id="body" name="author" required />
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
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) { //data.request
  const formData = await request.formData()
  const postData = Object.fromEntries(formData) // this will generate {body: '...', author: '...'}
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect('/')

}
