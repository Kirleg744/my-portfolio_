import styles from "@/styles/contact.module.scss";
import ContactInput from "./ContactInput";
import Link from "next/link";
import { MutableRefObject, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast  from "react-toastify";
const ContactForm = () => {
    const [acceptWithRules, setAcceptWithRules] = useState(false);
    const formRef = useRef() as MutableRefObject<HTMLFormElement>;

    const toggleAcceptWithRules = () => {
        setAcceptWithRules(!acceptWithRules);
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_3zjexdk",
            "template_tsyvjrd",
            formRef.current,
            "nWb5i162CN2oAbmeK"
        ).then(result => {
            toast('Данні відправлені')
        }, error => {

        }

        )
    };
    return (
        <form className={styles.contact__form} action="">
            <ContactInput
                text="П.І.Б"
                placeholder="Вкажіть ваше ПІБ"
                type="text"
                name="fullName"
            />
            <ContactInput
                text="Посада/Компанія"
                placeholder="Вкажіть вашу посаду/компанію"
                type="text"
                name="comapany"
            />
            <ContactInput
                text="E-mail*"
                placeholder="Вкажіть ваш E-mail"
                type="text"
                name="email"
            />
            <ContactInput
                text="Телефон*"
                placeholder="Вкажіть ваш телефон"
                type="text"
                name="number"
            />
            <button
                disabled={!acceptWithRules}
                className={styles.contact__form__btn}
            >
                Відправити заявку
            </button>
            <label className={styles.contact__form__checkbox}>
                <input
                    onChange={toggleAcceptWithRules}
                    className={styles.contact__form__checkbox__input}
                    type="checkbox"
                />
                <span className={styles.contact__form__checkbox__span}></span>
                <span className={styles.contact__form__checkbox__text}>
                    Натискаючи на кнопку «Надіслати заявку», я погоджуюсь з
                    <Link legacyBehavior passHref href="/privacy-policy">
                        <a
                            className={styles.contact__form__checkbox__link}
                            href=""
                        >
                            Політикою конфіденційності
                        </a>
                    </Link>
                    та приймаю
                    <Link
                        legacyBehavior
                        passHref
                        href="/personal-data-of-clients"
                    >
                        <a
                            className={styles.contact__form__checkbox__link}
                            href=""
                        >
                            Згоду на обробку персональних даних.
                        </a>
                    </Link>
                </span>
            </label>
        </form>
    );
};

export default ContactForm;
