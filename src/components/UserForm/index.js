import React, { useRef } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title } from "./styles";

export const UserForm = ({ aproveAuth, title }) => {
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
      <Title>{title}</Title>
      <Form ref={form}>
        <Input {...email} placeholder="Email" />
        <Input {...password} type="password" placeholder="Password" />
        <Button type="submit" onClick={handleSubmit}>
          {title}
        </Button>
      </Form>
    </>
  );
};
