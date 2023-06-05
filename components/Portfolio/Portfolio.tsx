import { useState } from "react";
import MainTitle from "../MainTitle/MainTitle";
import styles from "@/styles/portfolio.module.scss";
import PortfolioTabControls from "./PortfolioTabControls";
import PortfolioTabContent from "./PortfolioTabContent";
import {
    portfolioItems1,
    portfolioItems2,
    portfolioItems3,
    portfolioItems4,
} from "./PortfolioTabContents";
import PortfolioTabItem from "./PortfolioTabItem";
import { useMediaQuery } from "@/hooks";
import PortfolioSlider from "./PortfolioSlider";

import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Portfolio = () => {
    const [portfolioTab1, setPortfolioTab1] = useState(true);
    const [portfolioTab2, setPortfolioTab2] = useState(false);
    const [portfolioTab3, setPortfolioTab3] = useState(false);
    const [portfolioTab4, setPortfolioTab4] = useState(false);

    const handleShowPortfolioItems1 = () => {
        setPortfolioTab1(true);
        setPortfolioTab2(false);
        setPortfolioTab3(false);
        setPortfolioTab4(false);
    };

    const handleShowPortfolioItems2 = () => {
        setPortfolioTab1(false);
        setPortfolioTab2(true);
        setPortfolioTab3(false);
        setPortfolioTab4(false);
    };

    const handleShowPortfolioItems3 = () => {
        setPortfolioTab1(false);
        setPortfolioTab2(false);
        setPortfolioTab3(true);
        setPortfolioTab4(false);
    };

    const handleShowPortfolioItems4 = () => {
        setPortfolioTab1(false);
        setPortfolioTab2(false);
        setPortfolioTab3(false);
        setPortfolioTab4(true);
    };

    const isMobile = useMediaQuery(1024);

    const portfolioTabControls = [
        {
            id: 1,
            title: "Всі проєкти",
            isActive: portfolioTab1,
            handler: handleShowPortfolioItems1,
        },
        {
            id: 2,
            title: "Верстка",
            isActive: portfolioTab2,
            handler: handleShowPortfolioItems2,
        },
        {
            id: 3,
            title: "React.js",
            isActive: portfolioTab3,
            handler: handleShowPortfolioItems3,
        },
        {
            id: 4,
            title: "Next.js",
            isActive: portfolioTab4,
            handler: handleShowPortfolioItems4,
        },
    ];
    return (
        <section className={styles.portfolio} id="portfolio">
            <div className="container">
                <MainTitle text="Портфоліо" />
            </div>
            <div className="sub-container">
                <div className={styles.portfolio__inner}>
                    <ul className={styles.portfolio__tabs}>
                        {portfolioTabControls.map((item) => (
                            <PortfolioTabControls
                                key={item.id}
                                title={item.title}
                                isActive={item.isActive}
                                handleShowTab={item.handler}
                            />
                        ))}
                    </ul>
                </div>
                {!isMobile && <ul className={styles.portfolio__list}>
                    {portfolioTab1 && (
                        <PortfolioTabContent tabItems={portfolioItems1} />
                    )}
                    {portfolioTab2 && (
                        <PortfolioTabContent tabItems={portfolioItems2} />
                    )}
                    {portfolioTab3 && (
                        <PortfolioTabContent tabItems={portfolioItems3} />
                    )}
                    {portfolioTab4 && (
                        <PortfolioTabContent tabItems={portfolioItems4} />
                    )}
                </ul>}
            </div>
            {isMobile && (
                <div className={styles.portfolio__list__mobile}>
                    <div className={styles.portfolio__list__mobile__container}>
                        {portfolioTab1 && (
                            <PortfolioSlider tabItems={portfolioItems1} />
                        )}
                        {portfolioTab2 && (
                            <PortfolioSlider tabItems={portfolioItems2} />
                        )}
                        {portfolioTab3 && (
                            <PortfolioSlider tabItems={portfolioItems3} />
                        )}
                        {portfolioTab4 && (
                            <PortfolioSlider tabItems={portfolioItems4} />
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
