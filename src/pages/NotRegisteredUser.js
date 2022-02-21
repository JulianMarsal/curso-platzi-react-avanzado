import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import UserForm from "../components/UserForm";
import { useRegisterMutation } from "../hooks/useRegisterMutation";
import { useLoginMutation } from "../hooks/useLoginMutation";

export const NotRegisteredUser = () => {
  //const history = useHistory();
  const { setLogin } = useContext(AppContext);
  const { registerMutation, loadingRegister, errorRegister } =
    useRegisterMutation();
  const { login, loadingLogin, errorLogin } = useLoginMutation();

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    registerMutation({ variables: variable }).then(({ data }) => {
      const { singup } = data;
      setLogin(singup);
    });
  };

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    login({ variables: variable }).then(({ data }) => {
      const { login } = data;
      setLogin(login);
    });
  };

  const errorRegisterMsg =
    errorRegister && "El usuario ya existe o hay algún problema.";
  const errorLoginMsg =
    errorLogin && "El usuario o la contraseñas no son correctas.";
  return (
    <React.Fragment>
      <UserForm
        onSubmit={onSubmitRegister}
        disabled={loadingRegister}
        error={errorRegisterMsg}
        title="Registrarse"
      />

      <UserForm
        onSubmit={onSubmitLogin}
        disabled={loadingLogin}
        error={errorLoginMsg}
        title="Iniciar Sesion"
      />
    </React.Fragment>
  );
};

export default NotRegisteredUser;
