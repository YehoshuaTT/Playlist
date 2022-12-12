import React from "react";
import { useParams, Route, Routes } from "react-router-dom";
import YouTube from "react-youtube";
import MyPlaylist from "../MyPlaylist";

function Main({ setNumOfPl, editPlaylist, setEditPlaylist, userPlaylists, numOfPl, setUserPlaylists, setShowSongs, showSongs, setPlayingNow, setPLName, PLName }) {
    const id = useParams()
    const id2 = id[Object.keys(id)[0]];

    return <div className="video-stream">
        {id2 != "myplaylist" ? <h2 className="player-title">Youtube</h2> : null}
        <Routes>
            <Route path="/myplaylist/" element={<MyPlaylist setUserPlaylists={setUserPlaylists} showSongs={showSongs} setShowSongs={setShowSongs} numOfPl={numOfPl} setNumOfPl={setNumOfPl} setPLName={setPLName} PLName={PLName} userPlaylists={userPlaylists} editPlaylist={editPlaylist} setEditPlaylist={setEditPlaylist} setPlayingNow={setPlayingNow} />} />
            <Route path="/*" element={<YouTube videoId={id2} className="video-player" />} />
        </Routes>


    </div>
}






export default Main

// import React from "react";
// import { useParams, Route, Routes } from "react-router-dom";
// import YouTube from "react-youtube";
// import MyPlaylist from "../MyPlaylist";

// function Main({ setNumOfPl, editPlaylist, setEditPlaylist, userPlaylists, numOfPl, setUserPlaylists, setShowSongs, showSongs, setPlayingNow, setPLName, PLName }) {
//     const id = useParams()
//     const id2 = id[Object.keys(id)[0]];

//     return <div className="video-stream">
//         {id2 != "myplaylist" ? <h2 className="player-title">Youtube</h2> : null}
//         <Routes>
//             <Route path="/myplaylist/" element={<MyPlaylist setUserPlaylists={setUserPlaylists} showSongs={showSongs} setShowSongs={setShowSongs} numOfPl={numOfPl} setNumOfPl={setNumOfPl} setPLName={setPLName} PLName={PLName} userPlaylists={userPlaylists} editPlaylist={editPlaylist} setEditPlaylist={setEditPlaylist} setPlayingNow={setPlayingNow} />} />
//             <Route path="/*" element={<YouTube videoId={id2} className="video-player" />} />
//         </Routes>


//     </div>
// }






// export default Main
