import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Header from "../Header/Header"
import PlayListContainer from "../PlayListContainer/PlayListContainer";
import "../styles.css"
import YouTube from "react-youtube";
import MyPlaylist from "../MyPlaylist";


function Layout() {
    const [searchKeyWord, setSearchKeyWord] = useState("חנן בן ארי")
    const [editPlaylist, setEditPlaylist] = useState([])
    const [playingNow, setPlayingNow] = useState([])
    const [PLName, setPLName] = useState("")
    const [userPlaylists, setUserPlaylists] = useState([])
    const [numOfPl, setNumOfPl] = useState(0)
    const [showSongs, setShowSongs] = useState(false)

    const id = useParams()
    const id2 = id[Object.keys(id)[0]];

    return (
        <div className="app-container">
            <Header setSearchKeyWord={setSearchKeyWord} />
            <div className="layout">
                <PlayListContainer editPlaylist={editPlaylist} showSongs={showSongs} setEditPlaylist={setEditPlaylist} playingNow={playingNow} setPlayingNow={setPlayingNow} searchKeyWord={searchKeyWord} />
                {id2 != "myplaylist" ? <h2 className="player-title">Youtube</h2> : null}
                <Routes>
                    <Route path="/myplaylist" element={<MyPlaylist setUserPlaylists={setUserPlaylists} showSongs={showSongs} setShowSongs={setShowSongs} numOfPl={numOfPl} setNumOfPl={setNumOfPl} setPLName={setPLName} PLName={PLName} userPlaylists={userPlaylists} editPlaylist={editPlaylist} setEditPlaylist={setEditPlaylist} setPlayingNow={setPlayingNow} />} />
                    <Route path="/*" element={<YouTube videoId={id2} className="video-player" />} />
                </Routes>
            </div>
        </div>
    )
}


export default Layout