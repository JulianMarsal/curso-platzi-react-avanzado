import React from "react";
import { FavsWithQuery } from "../hooks/useGetFavorites";

export const Favs = () => {
  return (
    <>
      <h1>Favs</h1>
      <FavsWithQuery />
    </>
  );
};
