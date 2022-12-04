import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css"

function Header({ setKeyWord, setCanLog, myPlaylist }) {
    const navi = useNavigate()
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
                <div className="user-buttens">
                    <button className="user-logout" onClick={() => { setCanLog(false); navi("/") }}>Logout</button>
                    <Link to="/layout/main/myplaylist"> <button className="my-playlist">{`My playlist (${myPlaylist.length})`}</button></Link>
                </div>
            </div>
        </div>

    )


}

export default Header