import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const User = () => {
  const { logOut } = useContext(AppContext);
  return (
    <>
      <h1>User</h1>
      <button onClick={logOut}>Cerrar Cesión</button>
    </>
  );
};
