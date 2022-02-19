import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { useGetSinglePhoto } from "./hooks/useGetSinglePhoto";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { Favs } from "./pages/Favs";
import { AppProvider } from "./context/AppContext";
import { useContext, useState } from "react";
import { AppContext } from "./context/AppContext";
export const App = () => {
  //console.log({ user });

  const {
    user: { isAuth },
  } = useContext(AppContext);
  console.log(isAuth);
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/" element={<Home />} />
          {isAuth ? (
            <>
              <Route path="/favs" element={<Favs />} />
              <Route path="/user" element={<User />} />
            </>
          ) : (
            <>
              <Route path="/favs" element={<Favs />} />
              <Route path="/user" element={<NotRegisteredUser />} />
            </>
          )}
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
};
