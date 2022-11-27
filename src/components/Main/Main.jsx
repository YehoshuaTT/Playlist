import React from "react";
import PlayListContainer from "../PlayListContainer/PlayListContainer";
import Player from "../Player/Player";
import "../Header/header.css"
import { useState } from "react";



function Main({ playlist }) {

    const [toPlay, setPlay] = useState("http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com")
    const setToPlay = (e) => setPlay(e)
    console.log(toPlay);


    return (
        <div className="main" >
            <Player toPlay={toPlay} />
            <PlayListContainer playlist={playlist} setToPlay={setToPlay} />
        </div>

    )


}

export default Main