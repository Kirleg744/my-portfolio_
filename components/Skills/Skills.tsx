import styles from "@/styles/skills.module.scss";
import MainTitle from "../MainTitle/MainTitle";
import SkillsItem from "./SkillsItem";
const Skills = () => {
    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <MainTitle text="Навички" />
            </div>
            <div className="sub-container">
                <ul className={styles.skills__list}>
                    <SkillsItem
                        title="Розробка Frontend"
                        text="HTML, CSS, SASS, Bootstrap, React.js, Next.js, Typescript, Redux. Vue.js. Vuex"
                        iconClass={styles.skills__frontend}
                    />
                </ul>
            </div>
        </section>
    );
};

export default Skills
