import "./styles/index.scss";
import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/ClassNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button type="button" onClick={toggleTheme}>
        change theme
      </button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О компании</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
