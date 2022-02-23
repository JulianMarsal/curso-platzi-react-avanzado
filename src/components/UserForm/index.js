import React, { useState } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title, Error } from "./styles";

const UserForm = ({ error, onSubmit, title, disabled }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: form.email, password: form.password });
  };

  return (
    <React.Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleForm}
        />
        <Input
          disabled={disabled}
          placeholder="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleForm}
        />

        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </React.Fragment>
  );
};

export default UserForm;