import React from "react";
import YouTube from 'react-youtube';

function player(toPlay) {

    return <div className="video-stream">
        <YouTube videoId={toPlay.toPlay.toString()} className="video-player" />;
    </div>
}

export default player