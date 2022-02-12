import React from "react";
import { useGetSinglePhoto } from "../hooks/useGetSinglePhoto";
import { useParams } from "react-router";
import { PhotoCard } from "../components/PhotoCard";

export const Detail = () => {
  const params = useParams();
  const { loading, error, data = {} } = useGetSinglePhoto(params.detailId);

  return <PhotoCard key={data} {...data.photo} />;
};
