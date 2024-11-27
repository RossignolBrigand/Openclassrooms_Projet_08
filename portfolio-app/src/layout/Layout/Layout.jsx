import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;