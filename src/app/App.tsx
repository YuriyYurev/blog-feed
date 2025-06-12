import "./styles/index.scss";
import { Link } from "react-router-dom";

import { classNames } from "shared/lib/ClassNames/ClassNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button type="button" onClick={toggleTheme}>
        change theme
      </button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О компании</Link>
      <AppRouter />
    </div>
  );
}
