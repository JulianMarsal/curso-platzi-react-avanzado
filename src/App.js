import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";
import { useGetPhotos } from "./hooks/useGetPhotos";
import { PhotoCard } from "./components/PhotoCard";
import { useGetSinglePhoto } from "./hooks/useGetSinglePhoto";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  const { loading, error, data = {} } = useGetSinglePhoto(detailId);

  {
    console.log(data);
  }
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCard key={data} {...data.photo} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </>
      )}
    </div>
  );
};
