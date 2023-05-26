import { useMediaQuery } from "@/hooks";
import Logo from "../Logo/Logo";
import { Link } from "react-scroll";
import { useState } from "react";
import styles from "../../styles/header.module.scss";
import stylesMenu from '../../styles/mobilemenu.module.scss'
const Header = () => {
    const isMobile = useMediaQuery(640);
    const [menuOpen, setMenuOpen] = useState(false)
    const spy = true;
    const smooth = true;
    const offset = 140;
    const duration = 500;
    const currentMenuItemClass = isMobile
        ? stylesMenu.menu__item
        : styles.header__nav__list__item;

    const handleToggleMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.toggle('overflow-hidden')
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        (document.querySelector("body") as HTMLBodyElement).classList.remove(
            "overflow-hidden"
        );
        setMenuOpen(false);
    };
    return (
        <header className={styles.header}>
            <div className={`container ${styles.header__container}`}>
                <Logo />
                {isMobile && (
                    <button
                        onClick={handleToggleMenu}
                        className={`${styles.burger__menu} ${
                            menuOpen ? styles.open : ""
                        }`}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                )}
                <nav
                    className={`${
                        isMobile ? stylesMenu.menu : styles.header__nav
                    } ${menuOpen ? stylesMenu.open : ""}`}
                >
                    <ul
                        className={`${
                            isMobile
                                ? styles.list__reset
                                : styles.header__nav__list
                        }`}
                    >
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to="about"
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.header__nav__list__item__link}
                                onClick={closeMenu}
                            >
                                Про мене
                            </Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to="skills"
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.header__nav__list__item__link}
                                onClick={closeMenu}
                            >
                                Навички
                            </Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to="portfolio"
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.header__nav__list__item__link}
                                onClick={closeMenu}
                            >
                                Портфоліо
                            </Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to="contact"
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.header__nav__list__item__link}
                                onClick={closeMenu}
                            >
                                Зв`язатися зі мною
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
