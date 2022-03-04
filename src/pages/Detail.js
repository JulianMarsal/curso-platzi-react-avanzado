import React from "react";
import { useGetSinglePhoto } from "../hooks/useGetSinglePhoto";
import { useParams } from "react-router";
import { PhotoCard } from "../components/PhotoCard";
import { Layout } from "../components/Layout";

export default () => {
  const params = useParams();
  const { loading, error, data = {} } = useGetSinglePhoto(params.detailId);

  return (
    <Layout title={`Fotografía ${params.detailId}`} showTitle={true}>
      <PhotoCard key={data} {...data.photo} />
    </Layout>
  );
};
