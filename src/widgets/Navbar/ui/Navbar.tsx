import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/"
                className={cls.mainLink}
            // eslint-disable-next-line i18next/no-literal-string
            >
                MainPage
            </AppLink>
            {/*  eslint-disable-next-line i18next/no-literal-string */}
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                AboutPage
            </AppLink>
        </div>
    </div>
);
