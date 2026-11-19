import { useState } from "react";
import "./Pages.scss";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  return (
    <main className="page">
      <h1 className="page__title">Contact us</h1>
      <p className="page__text">
        Have a question? Fill in the form and we will get back to you.
      </p>
      <form className="page__form" onSubmit={handleSubmit}>
        <input
          className="page__input"
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          className="page__input"
          type="email"
          name="email"
          placeholder="Your email"
          required
        />
        <textarea
          className="page__input page__textarea"
          name="message"
          placeholder="Your message"
          rows={5}
          required
        />
        <button className="page__submit" type="submit">
          Send
        </button>
        {sent && <p className="page__success">Thank you! Message sent.</p>}
      </form>
    </main>
  );
}

export default Contact;
