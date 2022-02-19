import React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import UserForm from "../components/UserForm";
import { useRegisterMutation } from "../hooks/useRegisterMutation";

export const NotRegisteredUser = () => {
  //const history = useHistory();
  const { login } = useContext(AppContext);
  const { registerMutation, data, loading, error } = useRegisterMutation();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    registerMutation({ variables: variable }).then(login);
  };
  const errorMsg = error && "El usuario ya existe o hay algún problema.";
  return (
    <React.Fragment>
      <UserForm
        onSubmit={onSubmit}
        disabled={loading}
        error={errorMsg}
        title="Registrarse"
      />
      <UserForm onSubmit={login} title="Iniciar Sesion" />
    </React.Fragment>
  );
};

export default NotRegisteredUser;
