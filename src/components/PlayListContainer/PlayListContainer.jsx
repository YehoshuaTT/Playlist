import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PlayListContainer({ numOfPl, playingNow, editPlaylist, setEditPlaylist, searchKeyWord, setPlayingNow, userPlaylists }) {

    const options = {
        method: 'GET',
        url: 'https://simple-youtube-search.p.rapidapi.com/search',
        params: { query: searchKeyWord, safesearch: 'false' },
        headers: {
            'X-RapidAPI-Key': '022ffbc35emsh2c9c765cf179ddep115ae8jsn0304f450bce9',
            'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
        }
    };
    useEffect(() => {
        axios.request(options).then(function (response) {
            setPlayingNow(response.data.results);
        }).catch(function (error) {
            console.error(error);
        })

    }, [searchKeyWord])

    const addSongToPlalist = async (song) => {

        let toPush = []
        toPush = [...editPlaylist]
        if (toPush.length > 0) toPush.forEach((v) => { if (!v.id == song.id) toPush.push(song) })
        toPush.push(song)
        setEditPlaylist(toPush)
        updateAPlaylist(toPush)
    }

    const updateAPlaylist = async (updatedPlaylist) => {
        const updated = {
            username: localStorage.getItem("token"),
            title: userPlaylists[numOfPl].title,
            playlist: updatedPlaylist
        }
        await axios.put("http://localhost:3001/playlist", updated)
    }

    return (
        <div className="playlist-container" >
            {playingNow.map((v) => {
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
                            {editPlaylist != null && <img title="Add" className="a-t-p-button" width="40px" src='https://www.svgrepo.com/show/142370/add.svg' onClick={() => addSongToPlalist(v)} />}
                        </div>
                    </div>
                )
            })}
        </div >
    )


}

export default PlayListContainer