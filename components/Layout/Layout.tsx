import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
