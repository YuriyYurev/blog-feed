import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button type="button" onClick={toggleTheme}>
        Смена темы
      </button>
      <Link to={"/"}>MainPage</Link>
      <Link to={"/about"}>AboutPage</Link>
      <Suspense fallback={<h1>Загрука</h1>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
