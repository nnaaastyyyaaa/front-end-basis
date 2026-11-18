import { useEffect } from "react";
import "./Modal.scss";
import { useModal } from "../context/Modal";

function Modal() {
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
    closeModal();
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div
        className="modal__window"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal__close"
          onClick={closeModal}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="modal__title" id="modal-title">
          Create an account
        </h2>
        <p className="modal__text">Fill in the form below to get started.</p>
        <form className="modal__form" onSubmit={handleSubmit}>
          <input
            className="modal__input"
            type="text"
            name="name"
            placeholder="Full name"
            required
          />
          <input
            className="modal__input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="modal__input"
            type="password"
            name="password"
            placeholder="Password"
            minLength={6}
            required
          />
          <button className="modal__submit" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
