import React from "react";
import "../Header/header.css"
import YouTube from 'react-youtube';
import { useParams, Route, Routes } from "react-router-dom";
import MyPlaylist from "../MyPlaylist";
function Main({ myPlaylist, setMyPlaylist, setPlaylist }) {
    console.log(myPlaylist);
    const id = useParams()
    const id2 = id[Object.keys(id)[0]];
    console.log(id2);
    return <div className="video-stream">
        {id2 != "myplaylist" ? <h2 className="player-title">Youtube</h2> : null}
        <Routes>
            <Route path="/myplaylist" element={<MyPlaylist myPlaylist={myPlaylist} setMyPlaylist={setMyPlaylist} setPlaylist={setPlaylist} />} />
            <Route path="/*" element={<YouTube videoId={id2} className="video-player" />} />
        </Routes>


    </div>
}






export default Main