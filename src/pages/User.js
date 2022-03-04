import React, { useContext } from "react";
import { SubmitButton } from "../components/SubmitButton";
import { AppContext } from "../context/AppContext";

export default () => {
  const { logOut } = useContext(AppContext);
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={logOut}>Cerrar Cesión</SubmitButton>
    </>
  );
};
