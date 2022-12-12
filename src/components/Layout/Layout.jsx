import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Header from "../Header/Header"
import Main from "../Main/Main";
import PlayListContainer from "../PlayListContainer/PlayListContainer";
import "../Header/header.css"
import YouTube from "react-youtube";
import MyPlaylist from "../MyPlaylist";


function Layout() {
    const [searchKeyWord, setSearchKeyWord] = useState("חנן בן ארי")
    const [editPlaylist, setEditPlaylist] = useState([])
    const [playingNow, setPlayingNow] = useState([])
    const [PLName, setPLName] = useState(null)
    const [userPlaylists, setUserPlaylists] = useState([])
    const [numOfPl, setNumOfPl] = useState(0)
    const [showSongs, setShowSongs] = useState(false)


    const id = useParams()
    const id2 = id[Object.keys(id)[0]];
    return (
        <div className="app-container">
            <Header setUserPlaylists={setUserPlaylists} userPlaylists={userPlaylists} setSearchKeyWord={setSearchKeyWord} searchKeyWord={searchKeyWord} editPlaylist={editPlaylist} setEditPlaylist={setEditPlaylist} />
            <div className="layout">
                <PlayListContainer numOfPl={numOfPl} userPlaylists={userPlaylists} editPlaylist={editPlaylist} showSongs={showSongs} setEditPlaylist={setEditPlaylist} playingNow={playingNow} setPlayingNow={setPlayingNow} PLName={PLName} searchKeyWord={searchKeyWord} />
                {id2 != "myplaylist" ? <h2 className="player-title">Youtube</h2> : null}
                <Routes>
                    {/* <Route path="/main/*" element={<Main showSongs={showSongs} setShowSongs={setShowSongs} numOfPl={numOfPl} setNumOfPl={setNumOfPl} userPlaylists={userPlaylists} editPlaylist={editPlaylist} setEditPlaylist={setEditPlaylist} setPlayingNow={setPlayingNow} setPLName={setPLName} PLName={PLName} setUserPlaylists={setUserPlaylists} />} /> */}
                    <Route path="/myplaylist" element={<MyPlaylist setUserPlaylists={setUserPlaylists} showSongs={showSongs} setShowSongs={setShowSongs} numOfPl={numOfPl} setNumOfPl={setNumOfPl} setPLName={setPLName} PLName={PLName} userPlaylists={userPlaylists} editPlaylist={editPlaylist} setEditPlaylist={setEditPlaylist} setPlayingNow={setPlayingNow} />} />
                    <Route path="/*" element={<YouTube videoId={id2} className="video-player" />} />
                </Routes>
            </div>
        </div>


    );
}


export default Layout

// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Header from "../Header/Header"
// import Main from "../Main/Main";
// import PlayListContainer from "../PlayListContainer/PlayListContainer";
// import "../Header/header.css"


// function Layout() {
//     const [searchKeyWord, setSearchKeyWord] = useState("חנן בן ארי")
//     const [editPlaylist, setEditPlaylist] = useState([])
//     const [playingNow, setPlayingNow] = useState([])
//     const [PLName, setPLName] = useState(null)
//     const [userPlaylists, setUserPlaylists] = useState([])
//     const [numOfPl, setNumOfPl] = useState(0)
//     const [showSongs, setShowSongs] = useState(false)

//     return (
//         <div className="app-container">
//             <Header setUserPlaylists={setUserPlaylists} userPlaylists={userPlaylists} setSearchKeyWord={setSearchKeyWord} searchKeyWord={searchKeyWord} editPlaylist={editPlaylist} setEditPlaylist={setEditPlaylist} />
//             <div className="layout">
//                 <PlayListContainer numOfPl={numOfPl} userPlaylists={userPlaylists} editPlaylist={editPlaylist} showSongs={showSongs} setEditPlaylist={setEditPlaylist} playingNow={playingNow} setPlayingNow={setPlayingNow} PLName={PLName} searchKeyWord={searchKeyWord} />
//                 <Routes>
//                     <Route path="/main/*" element={<Main showSongs={showSongs} setShowSongs={setShowSongs} numOfPl={numOfPl} setNumOfPl={setNumOfPl} userPlaylists={userPlaylists} editPlaylist={editPlaylist} setEditPlaylist={setEditPlaylist} setPlayingNow={setPlayingNow} setPLName={setPLName} PLName={PLName} setUserPlaylists={setUserPlaylists} />} />
//                 </Routes>
//             </div>
//         </div>


//     );
// }


// export default Layout

