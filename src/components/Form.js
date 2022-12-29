import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// // Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

function Form() {
  const form = useRef();

  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    // For every error in the form we put the string to the errors array and then display it on the page at the end
    e.preventDefault();
    let errors = [];
    setErrorMessage("");
    // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      errors.push("* Email is invalid\n");
    }
    // If email is blank we let the user know it is required
    if (email === "") {
      errors.push("* Email is Required\n");
    }
    // If name is blank we let the user know it is required
    if (name === "") {
      errors.push("* Name is Required\n");
    }
    // If message is blank we let the user know it is required
    if (message === "") {
      errors.push("* Message is Required\n");
    }
    let newerrors = errors.join("");
    setErrorMessage(newerrors);
    // if there are errors the fuction is stoped and the user has a the ability to fix their mistake
    if (errorMessage !== "") {
      return;
    } else {
      const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);

        emailjs
          .sendForm(
            "service_z462rs9",
            "template_brvfken",
            form.current,
            "TculVHgXqPtIaF4LG"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
      sendEmail(e);
    }
    // If there are no erros we want to clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <form ref={form}>
      <div className="input-group mb-3">
        <label className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            Email
          </span>
        </label>
        <input
          className="form-control"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            Name
          </span>
        </label>
        <input
          className="form-control"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="Name"
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            Message
          </span>
        </label>
        <textarea
          className="form-control"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Message"
        />
      </div>
      <br></br>
      <button className="pbtn btn btn-lg btn-block" onClick={handleFormSubmit}>
        Send
      </button>

      {errorMessage && (
        <div>
          <pre className="error-text">{errorMessage}</pre>
        </div>
      )}
    </form>
  );
}

export default Form;
