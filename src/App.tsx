import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/HomePage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";

export const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>MainPage</Link>
      <Link to={"/about"}>AboutPage</Link>
      <Suspense fallback={<h1>Загрука</h1>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
