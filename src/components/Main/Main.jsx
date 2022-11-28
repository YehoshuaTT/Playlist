import React from "react";
import "../Header/header.css"

import YouTube, { YouTubeProps } from 'react-youtube';

function Main(toPlay) {

    return <div className="video-stream">
        <div className="player-title">Youtube</div>
        <YouTube videoId={toPlay.toPlay.toString()} className="video-player" />
    </div>
}






export default Main