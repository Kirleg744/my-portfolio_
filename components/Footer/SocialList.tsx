import styles from "../../styles/socialListFooter.module.scss";
const SocialList = () => {
    return (
        <ul className={styles.social__list}>
            <li className={styles.social__list__item}>
                <a
                    className={styles.social__list__item__link}
                    href="https://www.facebook.com/profile.php?id=100004757239181"
                >
                    <span className={styles.social__list__item__link__text}>
                        facebook
                    </span>
                    <span className={styles.social__list__item__link__icon}>
                        <img src="/img/facebook.svg" alt="facebook" />
                    </span>
                </a>
            </li>
            <li className={styles.social__list__item}>
                <a
                    className={styles.social__list__item__link}
                    href="https://t.me/Kirleg"
                >
                    <span className={styles.social__list__item__link__text}>
                        telegram
                    </span>
                    <span className={styles.social__list__item__link__icon}>
                        <img src="/img/telegram.svg" alt="facebook" />
                    </span>
                </a>
            </li>
            <li className={styles.social__list__item}>
                <a
                    className={styles.social__list__item__link}
                    href="tel:0967836807"
                >
                    <span className={styles.social__list__item__link__text}>
                        0967836807
                    </span>
                    <span className={styles.social__list__item__link__icon}>
                        <img src="/img/phone.svg" alt="facebook" />
                    </span>
                </a>
            </li>
        </ul>
    );
};

export default SocialList;
