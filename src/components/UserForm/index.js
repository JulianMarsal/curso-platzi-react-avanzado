import React, { useRef } from "react";
import { useInputValue } from "../../hooks/useInputValue";

export const UserForm = ({ aproveAuth }) => {
  const form = useRef(null);
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const formEntries = Object.fromEntries(formData);
    console.log(formEntries);
    aproveAuth();
  };
  return (
    <>
      <form ref={form}>
        <input {...email} placeholder="Email" />
        <input {...password} type="password" placeholder="Password" />
        <button type="submit" onClick={handleSubmit}>
          Sing in
        </button>
      </form>
    </>
  );
};
