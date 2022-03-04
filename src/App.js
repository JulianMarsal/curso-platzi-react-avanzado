import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useContext, Suspense } from "react";
import { AppContext } from "./context/AppContext";
import Spinner from "./components/Spinner";

const Home = React.lazy(() => import("./pages/Home"));
const Detail = React.lazy(() => import("./pages/Detail"));
const Favs = React.lazy(() => import("./pages/Favs"));
const User = React.lazy(() => import("./pages/User"));
const NotRegisteredUser = React.lazy(() => import("./pages/NotRegisteredUser"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const NavBar = React.lazy(() => import("./components/NavBar"));

export const App = () => {
  const {
    user: { isAuth },
  } = useContext(AppContext);
  console.log(isAuth);
  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
};
