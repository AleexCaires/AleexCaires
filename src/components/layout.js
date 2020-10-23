import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import layoutStyles from '../styles/components/layout.module.scss';

const Layout = (props) => (
    <section className={layoutStyles.siteContainer}>
        <Header />
        <div className={layoutStyles.line}></div>
        <section className={layoutStyles.contentContainer} >
            {props.children}
        </section>
        <Footer />
    </section>
)

export default Layout