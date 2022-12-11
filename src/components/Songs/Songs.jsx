import axios from 'axios'
import React from 'react'

function Songs({ setEditPlaylist, editPlaylist, userPlaylists, numOfPl }) {

    const removeSong = (song) => {
        let toPush = []
        editPlaylist.forEach((v) => {
            if (v.id != song.id) toPush.push(v)
        })
        setEditPlaylist(toPush)
        console.log(editPlaylist);
        updateAPlalist(toPush)
    }

    const updateAPlalist = async (toPush) => {
        const updated = {
            username: localStorage.getItem("token"),
            title: userPlaylists[numOfPl].title,
            playlist: toPush
        }

        const { data } = await axios.put("http://localhost:3001/playlist", updated)
    }


    return (
        editPlaylist.map((v) => {
            return (
                <div className="the-playlist">
                    <div className="p-l-img">
                        <img className="p-l-img" src={v.thumbnail.url}></img>
                    </div>
                    <div className="the-details">
                        <div className="song-title">{v.title}</div>
                        <div className="song-durnation">{v.duration_formatted}</div>
                        <div className="views">{`views: ${v.views.toLocaleString()}`}</div>
                    </div>
                    <div className="add-to-playlist">
                        <button className="a-t-p-button" onClick={() => { removeSong(v) }} > - </button>
                    </div>
                </div>

            )
        })
    )
}

export default Songs