import axios from 'axios'
import React, { useEffect } from 'react'

function Songs({ setEditPlaylist, editPlaylist, userPlaylists,setUserPlaylists, numOfPl, i, reneder, setRender }) {

     useEffect(() => {
        const updateAPlalist = async () => {
            const updated = {
                username: localStorage.getItem("token"),
                title: userPlaylists[numOfPl].title,
                playlist: editPlaylist
            }
            const { data } = await axios.put("http://localhost:3001/playlist", updated)
        }
        updateAPlalist()
    }, [editPlaylist, reneder])


    useEffect(() => {
        const showPlaylist = async () => {
            const token = localStorage.getItem("token")
            let {data} = await axios.get(`http://localhost:3001/playlist?token=${token}`)
            setUserPlaylists(data)
        }
        showPlaylist()
    }, [editPlaylist, reneder])

    const removeSong = (song) => {
        let toPush = []
        editPlaylist.forEach((v) => {
            if (v.id != song.id) toPush.push(v)
        })
        setEditPlaylist(toPush)
        setRender(!reneder)
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