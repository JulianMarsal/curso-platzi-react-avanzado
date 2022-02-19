import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { UserForm } from "../components/UserForm";

export const NotRegisteredUser = () => {
  //const history = useHistory();
  const { login } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(e);
    //history.push("/user");
  };

  return (
    <>
      <UserForm title="Registrarse" aproveAuth={handleSubmit} />
      <UserForm title="Iniciar Sesión  " aproveAuth={handleSubmit} />
    </>
  );
};
