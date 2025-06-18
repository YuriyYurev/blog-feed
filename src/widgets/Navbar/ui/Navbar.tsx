import { classNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}></div>
      <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
        О сайте
      </AppLink>
    </div>
  );
};
