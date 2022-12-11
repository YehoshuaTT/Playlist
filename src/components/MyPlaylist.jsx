import Songs from './Songs/Songs';
import axios from 'axios';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

function MyPlaylist({ setNumOfPl, editPlaylist, setUserPlaylists, numOfPl, setEditPlaylist, userPlaylists, setPLName, PLName, setPlayingNow }) {

    const [input, setInput] = useState(false)
    const [currEditedPlaylist, setCurrEditedPlaylist] = useState([])
    const [pic, setPic] = useState("https://www.svgrepo.com/show/372563/new.svg")
    const [showSongs, setShowSongs] = useState(false)
    const navigate = useNavigate()

    const editHandeling = (e) => {
        setCurrEditedPlaylist(e)
        setShowSongs(!showSongs)
    }

    const deletePlaylist = async (i) => {
        if (!window.confirm("This will delete the playlist!"))
            return
        let token = localStorage.getItem("token")
        const info = {
            username: token,
            title: userPlaylists[i].title
        }
        const { data } = await axios.patch(`http://localhost:3001/playlist?token=${token}`, info);
        console.log(data);
    }

    const picAction = async () => {

        setInput(!input)
        changePic();

        if (pic != "https://www.svgrepo.com/show/372563/new.svg") {
            creatPL()
            showPlaylist()
        }
    }

    const showPlaylist = async () => {
        const token = localStorage.getItem("token")
        let response = await axios.get(`http://localhost:3001/playlist?token=${token}`)
        setUserPlaylists(response.data)
        setInput(5)
    }

    const changePic = () => {
        let a = "https://www.svgrepo.com/show/372563/new.svg";
        let b = "https://www.svgrepo.com/show/409323/thumb-up.svg";
        if (pic == a) setPic(b)
        else setPic(a)
    }

    const creatPL = async () => {
        if (PLName == "" || PLName == null) { alert("Enter a playlist name"); return }
        const newPL = {
            playlist: [],
            username: localStorage.getItem("token"),
            title: PLName
        }
        const { data } = await axios.post("http://localhost:3001/playlist/", newPL);
        console.log(data);

    }

    const startPlaying = (v) => {
        setPlayingNow(v.playlist)
        navigate(`/layout/main/${v.playlist[0].id}`)
    }



    return (
        <div className="user-playlists" >
            <div className='start-playing-the-playlist'>
                {input && <input onChange={(e) => setPLName(e.target.value)} id="pl-input-name" onKeyDown={(e) => { if (e.key === 'Enter') creatPL(e.target.value) }} ></input>}
                <img className='new-pl' width="40px" title="New playlist" src={pic} onClick={() => { picAction() }} />

            </div>
            {userPlaylists.length < 1 ?
                <h3>your playlist is empty</h3> :
                userPlaylists.map((v, i) => {
                    return (<>
                        <div className='singal-playlist'>
                            <div>
                                <img className='play-button' width="40px" src='https://www.svgrepo.com/show/77159/play.svg' onClick={() => startPlaying(v)} />
                            </div>
                            <div className='p-l-name'>
                                <h4 className='p-l - lists'>{v.title}</h4>
                            </div>
                            <div className='p-l-icons'>
                                <img className='add-song-button' title="Start editing" width="40px" src='https://www.svgrepo.com/show/142370/add.svg' onClick={() => { setEditPlaylist(v.playlist); editHandeling(i); setNumOfPl(i) }} />
                                <img className='delete-pl-button' width="40px" src='https://www.svgrepo.com/show/372049/remove.svg' onClick={() => deletePlaylist(i)} title="Delete playlist" />
                            </div>
                        </div>
                        <div>
                            {showSongs && i == currEditedPlaylist &&
                                <Routes>
                                    <Route path="/" element={<Songs numOfPl={numOfPl} userPlaylists={userPlaylists} editPlaylist={editPlaylist} setEditPlaylist={setEditPlaylist} i={i} />} />
                                </Routes>}
                        </div>
                    </>
                    )
                })




            }

        </div >
    )
}

export default MyPlaylist



