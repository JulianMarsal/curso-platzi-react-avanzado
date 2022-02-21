import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegisterMutation = () => {
  const [registerMutation, { data, loading, error }] = useMutation(REGISTER);
  //Add data, loading and error to return, and send them to NotRegisterUser, keep on eye on it on the future just in case.
  return {
    registerMutation,
    dataRegister: data,
    loadingRegister: loading,
    errorRegister: error,
  };
};
