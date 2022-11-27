import React, { useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "../Header/header.css"
import { useState } from "react";
import axios from "axios"
function Layout(props) {
    const [keyWord, setKeyWord] = useState("חנן בן ארי")
    const [playlist, setPlaylist] = useState([])

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
            <Header setKeyWord={setKeyWord} />
            <Main playlist={playlist} />
        </div>

    )


}

export default Layout