import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
            </main>
            <div className="background-animation">
                <div id="ball-one"></div>
                <div id="ball-two"></div>
                <div id="ball-three"></div>
            </div>
        </>
    );
}
