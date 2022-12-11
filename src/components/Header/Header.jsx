import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ setSearchKeyWord, editPlaylist, userPlaylists, setUserPlaylists }) {
    const navi = useNavigate()

    useEffect(() => {

        const showPlaylist = async () => {
            const token = localStorage.getItem("token")
            let response = await axios.get(`http://localhost:3001/playlist?token=${token}`)
            setUserPlaylists(response.data)
        }
        showPlaylist()
    }, [editPlaylist, userPlaylists])


    return (

        < div className="header">
            < div className="search">
                <input onKeyDown={(e) => { if (e.key === 'Enter') setSearchKeyWord(e.target.value) }} type="text" className="search-input" placeholder="What do you want to listen to?"></input>
            </div>
            < div className="user-interface">
                <div><img className="user-image" src="https://cdn4.iconfinder.com/data/icons/rounded-black-basic-ui/139/Profile01-RoundedBlack-512.png"></img></div>
                <div className="user-buttons">
                    <button className="user-button" onClick={() => { navi("/"); localStorage.removeItem('token'); }}>Logout</button>
                    <Link className="link-to-user" to="/layout/main/myplaylist"> <button className="user-playlist-button" >My playlists</button></Link>
                </div>
            </div>
        </div >

    )


}

export default Header