import React from "react";
import Search_Bar from "../Search_Bar/Search_Bar"
import "./header.css"
import User from "../User/User"

function Header(props) {

    return (
        < div className="header">
            header
            <Search_Bar />
            <User />
        </div>

    )


}

export default Header