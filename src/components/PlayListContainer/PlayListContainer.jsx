import React from "react";

function PlayListContainer({ playlist, setToPlay }) {
    const shorter = playlist.slice(0, 15)

    return (
        <div className="playlist-container" >
            {shorter.map((v) => {
                return (
                    <div className="the-playlist" onClick={() => setToPlay(v.id)}>
                        <div className="p-l-img">
                            <img className="p-l-img" src={v.thumbnail.url}></img>
                        </div>
                        <div className="the-details">
                            <div className="song-title">{v.title}</div>
                            <div className="song-durnation">{v.duration_formatted}</div>
                            <div className="views">{`views: ${v.views.toLocaleString()}`}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )


}

export default PlayListContainer