import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import './_layout.scss'

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                <Outlet />
                {/* {children} */}
            </main>
            <Footer />
        </>
    )
}

export default Layout;