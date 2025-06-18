import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { classNames } from "shared/lib/classNames/classNames";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button type="button" onClick={toggleTheme}>
        change theme
      </button>
    </div>
  );
}
