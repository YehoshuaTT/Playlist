import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header"
import Main from "../Main/Main";
import PlayListContainer from "../PlayListContainer/PlayListContainer";
import "../Header/header.css"


function Layout() {
    const [searchKeyWord, setSearchKeyWord] = useState("חנן בן ארי")
    const [editPlaylist, setEditPlaylist] = useState([])
    const [playingNow, setPlayingNow] = useState([])
    const [PLName, setPLName] = useState(null)
    const [userPlaylists, setUserPlaylists] = useState([])
    const [numOfPl, setNumOfPl] = useState(0)

    return (
        <div>
            <Header setUserPlaylists={setUserPlaylists} userPlaylists={userPlaylists} setSearchKeyWord={setSearchKeyWord} searchKeyWord={searchKeyWord} editPlaylist={editPlaylist} setEditPlaylist={setEditPlaylist} />
            <div className="layout">
                <PlayListContainer numOfPl={numOfPl} userPlaylists={userPlaylists} editPlaylist={editPlaylist} setEditPlaylist={setEditPlaylist} playingNow={playingNow} setPlayingNow={setPlayingNow} PLName={PLName} searchKeyWord={searchKeyWord} />
                <Routes>
                    <Route path="/main/*" element={<Main numOfPl={numOfPl} setNumOfPl={setNumOfPl} userPlaylists={userPlaylists} editPlaylist={editPlaylist} setEditPlaylist={setEditPlaylist} setPlayingNow={setPlayingNow} setPLName={setPLName} PLName={PLName} />} />
                </Routes>
            </div>
        </div>


    );
}


export default Layout