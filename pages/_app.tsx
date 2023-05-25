import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer position={"bottom-right"} hideProgressBar={false} closeOnClick rtl={false} theme="light"/>
        </>
    );
}
