/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/portfolio.module.scss";

interface iPortfolioTabItem {
    title: string;
    link: string;
    imgSrc: string;
}

const PortfolioTabItem = ({ title, link, imgSrc }: iPortfolioTabItem) => {
    return (
        <div className={styles.portfolio__list__item__inner}>
            <a className={styles.portfolio__list__item__link} href={link}>
                <img
                    className={styles.portfolio__list__item__img}
                    src={imgSrc}
                    alt=""
                />
                <h3 className={styles.portfolio__list__item__title}>{title}</h3>
            </a>
        </div>
    );
};

export default PortfolioTabItem;
