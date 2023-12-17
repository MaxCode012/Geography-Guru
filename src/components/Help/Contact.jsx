import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3h2odpb",
        "template_hw9yl9l",
        form.current,
        "zTiMBg6x67DKECJXB"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h1>Contact</h1>
      <h3>Shoot me an Email and I'll respond Asap</h3>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          className="contact-input"
          type="text"
          placeholder="Full Name..."
          name="user_name"
        />
        <input
          type="email"
          className="contact-input"
          name="user_email"
          placeholder="Email..."
        />
        <textarea
          className="contact-input"
          rows={6}
          name="message"
          placeholder="Message..."
        />
        <button className="contact-button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
