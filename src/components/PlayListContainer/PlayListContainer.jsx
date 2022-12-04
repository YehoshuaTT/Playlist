import React, { useState } from "react";
import { Link } from "react-router-dom";

function PlayListContainer({ playlist, myPlaylist, setMyPlaylist }) {

    const addSongToPlalist = (song) => {
        console.log(song);
        let toPush = []
        toPush = [...myPlaylist]
        if (!toPush.includes(song)) toPush.push(song)
        setMyPlaylist(toPush)
    }
    console.log(myPlaylist);
    return (
        <div className="playlist-container" >
            {playlist.map((v) => {
                return (
                    <div className="the-playlist">
                        <div className="p-l-img">
                            <img className="p-l-img" src={v.thumbnail.url}></img>
                        </div>
                        <Link className="the-details" to={`/layout/main/${v.id}`} style={{ textDecoration: 'none', color: "black" }} >
                            <div className="song-title">{v.title}</div>
                            <div className="song-durnation">{v.duration_formatted}</div>
                            <div className="views">{`views: ${v.views.toLocaleString()}`}</div>
                        </Link>
                        <div className="add-to-playlist">
                            <button className="a-t-p-button" onClick={() => addSongToPlalist(v)}>+</button>
                        </div>
                    </div>
                )
            })}
        </div >
    )


}

export default PlayListContainer