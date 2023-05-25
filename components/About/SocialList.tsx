import styles from '../../styles/socialList.module.scss'
const SocialList = () => {
    return (
        <ul className={styles.social__list}>
            <li className={styles.social__list__item}>
                <a className={styles.social__list__item__link} href="#">
                    <span className={styles.social__list__item__link__text}>
                        facebook
                    </span>
                    <span className={styles.social__list__item__link__icon}>
                        <img src="/img/facebook.svg" alt="facebook" />
                    </span>
                </a>
            </li>
            <li className={styles.social__list__item}>
                <a className={styles.social__list__item__link} href="#">
                    <span className={styles.social__list__item__link__text}>
                        telegram
                    </span>
                    <span className={styles.social__list__item__link__icon}>
                        <img src="/img/telegram.svg" alt="facebook" />
                    </span>
                </a>
            </li>
            <li className={styles.social__list__item}>
                <a className={styles.social__list__item__link} href="#">
                    <span className={styles.social__list__item__link__text}>
                        YouTube
                    </span>
                    <span className={styles.social__list__item__link__icon}>
                        <img src="/img/youtube.svg" alt="facebook" />
                    </span>
                </a>
            </li>
        </ul>
    );
}

export default SocialList