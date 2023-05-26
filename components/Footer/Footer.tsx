import styles from "@/styles/footer.module.scss";
import Logo from "../Logo/Logo";
import SocialList from "./SocialList";
import Link from "next/link";
import { useMediaQuery } from "@/hooks";

const Footer = () => {
    const isMobile725 = useMediaQuery(725);
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__container}`}>
                <span className={styles.footer__border} />
                <div className={styles.footer__inner}>
                    <div className={styles.footer__left}>
                        {isMobile725 && <SocialList />}
                        <Logo marginBottom={isMobile725 ? 15 : 44} />
                        <p className={styles.footer__copyright}>
                            © 2022-2023 <br /> «Кирило»
                        </p>
                    </div>
                    <div className={styles.footer__right}>
                        <div className={styles.footer__right__top}>
                            <p className={styles.footer__right__top__text}>
                                Поделитесь сайтом с друзьями:
                            </p>
                            {!isMobile725 && <SocialList />}
                        </div>
                        <div className={styles.footer__right__bottom}>
                            <ul className={styles.footer__right__bottom__list}>
                                <li
                                    className={
                                        styles.footer__right__bottom__list__item
                                    }
                                >
                                    <Link legacyBehavior href="/cookie-policy">
                                        <a
                                            className={
                                                styles.footer__right__bottom__list__item__link
                                            }
                                        >
                                            Політика використовування файлів
                                            cookie
                                        </a>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        styles.footer__right__bottom__list__item
                                    }
                                >
                                    <Link legacyBehavior href="/privacy-policy">
                                        <a
                                            className={
                                                styles.footer__right__bottom__list__item__link
                                            }
                                        >
                                            Політика обробки персональних даних
                                        </a>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        styles.footer__right__bottom__list__item
                                    }
                                >
                                    <Link
                                        legacyBehavior
                                        href="/personal-data-privacy"
                                    >
                                        <a
                                            className={
                                                styles.footer__right__bottom__list__item__link
                                            }
                                        >
                                            Політика конфіденційності
                                        </a>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        styles.footer__right__bottom__list__item
                                    }
                                >
                                    <Link legacyBehavior href="/agreement">
                                        <a
                                            className={
                                                styles.footer__right__bottom__list__item__link
                                            }
                                        >
                                            Згода на обробку персональних данних
                                            клієнтів - фізичних осіб
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
