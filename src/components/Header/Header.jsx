import React from "react";
import "./header.css"
// import User from "../User/User"

function Header({ setKeyWord, setCanLog }) {
    const enter = (e) => {
        if (e.key === 'Enter') setKeyWord(e.target.value)
    }
    return (

        < div className="header">
            < div className="search">
                <input onKeyDown={enter} type="text" className="search-input" placeholder="What do you want to listen to?"></input>
            </div>
            < div className="user-interface">
                <div><img className="user-image" src="https://cdn4.iconfinder.com/data/icons/rounded-black-basic-ui/139/Profile01-RoundedBlack-512.png"></img></div>
                <div className="user-text" onClick={() => setCanLog(false)}>Logout</div>
            </div>
        </div>

    )


}

export default Header