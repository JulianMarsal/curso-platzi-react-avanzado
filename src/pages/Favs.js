import React from "react";
import { FavsWithQuery } from "../hooks/useGetFavorites";
import { Layout } from "../components/Layout";
export const Favs = () => {
  return (
    <Layout
      title="Favoritas"
      subtitle="¡Todas tus fotos favoritas!"
      showTitle={true}
      showDescription={true}
    >
      <FavsWithQuery />
    </Layout>
  );
};
