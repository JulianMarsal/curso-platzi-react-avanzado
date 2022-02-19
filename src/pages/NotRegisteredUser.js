import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const NotRegisteredUser = () => {
  //const history = useHistory();
  const { login } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(e);
    //history.push("/user");
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <button>Iniciar Sesión</button>
      </form>
    </section>
  );
};
