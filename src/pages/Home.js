import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

export default () => {
  //   const { id } = props.match.params
  const params = useParams();

  return (
    <>
      <Helmet>
        <title>Petgram - App de fotos de mascotas</title>
        <meta
          name="description"
          content="En Petgram podes encontrar fotos de animales di-vi-nos"
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </>
  );
};
