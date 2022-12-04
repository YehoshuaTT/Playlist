import React from 'react'
import { useNavigate } from 'react-router-dom';

function MyPlaylist({ myPlaylist, setMyPlaylist, setPlaylist }) {
    console.log(myPlaylist);

    const removeFromPlaylist = (toRemove) => {
        let toPush = []
        myPlaylist.forEach((v) => {
            if (v != toRemove) toPush.push(v)
        })
        setMyPlaylist(toPush)
    }
    const navigate = useNavigate()

    const startPlaying = () => {
        setPlaylist(myPlaylist)
        navigate(`/layout/main/${myPlaylist[0].id}`)
    }


    return (
        <div className="playlist-container" >
            <div className='start-playing-the-playlist'>
                <button onClick={() => startPlaying()}> Start playin</button>
                <button onClick={() => setMyPlaylist([])}>Empty the playlist</button>
                <button onClick={() => navigate(-1)}>Resume Player</button>

            </div>
            {
                myPlaylist.length > 0 ?
                    myPlaylist.map((v) => {
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
                                    <button className="a-t-p-button" onClick={() => removeFromPlaylist(v)} > - </button>
                                </div>
                            </div>

                        )
                    }) : <h3>your playlist is empty</h3>
            }

        </div >
    )
}

export default MyPlaylist