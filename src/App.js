import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { PhotoCard } from "./components/PhotoCard";
import { useGetSinglePhoto } from "./hooks/useGetSinglePhoto";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail";
const urlParams = new window.URLSearchParams(window.location.search);
const detailId = urlParams.get("detail");
export const App = () => {
  const { loading, error, data = {} } = useGetSinglePhoto(detailId);

  {
    //<PhotoCard key={data} {...data.photo} />
  }
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route
            path="/detail/:detailId"
            element={<Detail detailId={detailId} data={data} />}
          ></Route>

          <Route path="/pet/:id" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
