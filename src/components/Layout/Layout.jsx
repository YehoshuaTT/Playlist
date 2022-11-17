import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "../Header/header.css"

function Layout(props) {

    return (
        <div className="layout" >
            <Header />
            <Main />

        </div>

    )


}

export default Layout