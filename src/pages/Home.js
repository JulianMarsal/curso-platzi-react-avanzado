import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { useParams } from "react-router";

export const Home = () => {
  //   const { id } = props.match.params
  const params = useParams();
  console.log(params);
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </>
  );
};
