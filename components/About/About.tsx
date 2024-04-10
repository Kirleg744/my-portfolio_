import styles from "@/styles/about.module.scss";
import MainTitle from "../MainTitle/MainTitle";
import ArrowSvg from "../ArrowSvg/ArrowSvg";
import SocialList from "./SocialList";
import { useMediaQuery } from "@/hooks";
const About = () => {
    const isMobile1080 = useMediaQuery(1080);
    const isMobile475 = useMediaQuery(475)
    return (
        <section className={styles.about} id="about">
            <div className="container">
                <MainTitle text="Про мене" />
            </div>
            <div className={`sub-container ${styles.about__sub__container}`}>
                <img
                    src="/img/myPhoto.jpg"
                    alt=""
                    className={styles.about__img}
                />
                <div className={styles.about__inner}>
                    <h3 className={styles.about__title}>
                        Кирило Легкий
                        <span className={styles.about__title__border}>
                            <span
                                className={styles.about__title__border__arrow}
                            >
                                <ArrowSvg />
                            </span>
                            <span
                                className={styles.about__title__border__line}
                            />
                        </span>
                        <p className={styles.about__text}>
                            Проживаю в Дніпрі. 19 років. Розробник Vue/React. Працюю над LMS. Закінчив коледж радіоелектроніки
                        </p>
                        {!isMobile1080 && <SocialList />}
                    </h3>
                </div>
            </div>
            <div className="sub-container">
                {isMobile1080 && <SocialList />}
            </div>
        </section>
    );
};

export default About;
