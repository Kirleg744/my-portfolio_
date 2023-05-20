/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../styles/logo.module.scss";
const Logo = () => (
    <Link href="/">
        <img src="/img/logo.svg" className={styles.logo} alt="logo" />
    </Link>
);

export default Logo
