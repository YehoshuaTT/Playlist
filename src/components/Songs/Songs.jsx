import axios from 'axios'
import React from 'react'

function Songs({ setEditPlaylist, editPlaylist, userPlaylists, numOfPl, i }) {
    const removeSong = (song) => {
        let toPush = []
        editPlaylist.forEach((v) => {
            if (v.id != song.id) toPush.push(v)
        })
        setEditPlaylist(toPush)
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

        userPlaylists[i].playlist.map((v) => {
            return (
                <div className="singal-user-playlist">
                    <div className="p-l-img">
                        <img className="p-l-img" src={v.thumbnail.url}></img>
                    </div>
                    <div className="the-details">
                        <div className="song-title">{v.title}</div>
                        <div className="song-durnation">{v.duration_formatted}</div>
                        <div className="views">{`views: ${v.views.toLocaleString()}`}</div>
                    </div>
                    <div className="add-to-playlist">
                        <img title="Remove" className="a-t-p-button" src='https://www.svgrepo.com/show/348454/remove.svg' onClick={() => { removeSong(v) }} />
                    </div>
                </div>
            )
        })
    )
}

export default Songs