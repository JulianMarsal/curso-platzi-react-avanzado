import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { Favs } from "./pages/Favs";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { NotFound } from "./pages/NotFound";

const Favs = React.lazy(() => import("./pages/Favs"));
export const App = () => {
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
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:detailId" element={<Detail />} />

          <Route
            path="/favs"
            element={isAuth ? <Favs /> : <NotRegisteredUser />}
          />
          <Route
            path="/user"
            element={isAuth ? <User /> : <NotRegisteredUser />}
          />
          <Route
            path="/login"
            element={
              !isAuth ? <NotRegisteredUser /> : <Navigate replace to="/" />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
};
