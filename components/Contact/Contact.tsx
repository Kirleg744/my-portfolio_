import SocialList from "../Contact/SocialList";
import ArrowSvg from "../ArrowSvg/ArrowSvg";
import MainTitle from "../MainTitle/MainTitle";
import styles from "@/styles/contact.module.scss";
import ContactForm from "./ContactForm";
import { useMediaQuery } from "@/hooks";
const Contact = () => {
    const isMobile485 = useMediaQuery(485);
    return (
        <section className={styles.contact} id="contact">
            <div className="container">
                <MainTitle text="Зв'язатися зі мною" />
            </div>
            <div className="sub-container">
                <div className={styles.contact__inner}>
                    <div className={styles.contact__left}>
                        <p className={styles.contact__text}>
                            Ви працюєте над чимось великим? Я із задоволенням
                            допоможу вам у цьому! Напишіть мені листа і ми
                            почнемо проект прямо зараз!
                        </p>
                        {!isMobile485 && (
                            <>
                                <h3 className={styles.contact__title}>
                                    <span
                                        className={styles.contact__title__text}
                                    >
                                        Я в cоцмережах
                                    </span>
                                    <span
                                        className={styles.contact__title__arrow}
                                    >
                                        <ArrowSvg />
                                    </span>
                                    <span
                                        className={
                                            styles.contact__title__border
                                        }
                                    />
                                </h3>
                                <SocialList />
                            </>
                        )}
                    </div>
                    <div className={styles.contact__right}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
