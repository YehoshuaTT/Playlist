import React from "react";
import Player from "../Player/Player";

function PlayListContainer({ playlist, setToPlay }) {


    return (
        <div className="playlist-container" >
            {playlist.map((v) => {
                return (
                    <div className="the-playlist" onClick={() => setToPlay(v.id)}>
                        <img className="p-l-img" src={v.thumbnail.url}></img>
                        <div>
                            <div>{v.title}</div>
                            <div>{v.duration_formatted}</div>
                            <div>{`views: ${v.views}`}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )


}

export default PlayListContainer