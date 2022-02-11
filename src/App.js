import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { PhotoCard } from "./components/PhotoCard";
import { useGetSinglePhoto } from "./hooks/useGetSinglePhoto";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  const { loading, error, data = {} } = useGetSinglePhoto(detailId);

  {
    console.log(urlParams.get("detailId"));
    console.log(data);
  }
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCard key={data} {...data.photo} />
      ) : (
        <Router>
          <Routes>
            <Route path="/pet/:id" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      )}
    </div>
  );
};
