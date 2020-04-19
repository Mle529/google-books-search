import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";

function Header() {
    return (
        <section className="hero is-dark is-bold">
            <Navbar />
            <Banner />
        </section>
    );
}

export default Header;