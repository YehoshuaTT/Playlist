import React, { useEffect, useState } from "react";
import axios from "axios"
import Header from "../Header/Header";
import PlayListContainer from "../PlayListContainer/PlayListContainer";
import { Outlet } from "react-router-dom";

function Layout({ setCanLog, setMyPlaylist, myPlaylist, playlist, setPlaylist }) {
    const [keyWord, setKeyWord] = useState("חנן בן ארי")


    console.log(myPlaylist);

    const options = {
        method: 'GET',
        url: 'https://simple-youtube-search.p.rapidapi.com/search',
        params: { query: keyWord, safesearch: 'false' },
        headers: {
            'X-RapidAPI-Key': '022ffbc35emsh2c9c765cf179ddep115ae8jsn0304f450bce9',
            'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
        }
    };
    useEffect(() => {
        axios.request(options).then(function (response) {
            setPlaylist(response.data.results);
        }).catch(function (error) {
            console.error(error);
        })

    }, [keyWord])
    console.log(playlist);

    return (
        <div className="layout" >
            <Header setKeyWord={setKeyWord} setCanLog={setCanLog} myPlaylist={myPlaylist} />
            <Outlet myPlaylist={myPlaylist} />
            <PlayListContainer playlist={playlist} setMyPlaylist={setMyPlaylist} myPlaylist={myPlaylist} />
        </div>
    )
}

export default Layout