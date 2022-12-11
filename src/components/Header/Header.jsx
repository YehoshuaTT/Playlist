import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Header({ setSearchKeyWord, editPlaylist, userPlaylists, setEditPlaylist, setUserPlaylists }) {
    const navi = useNavigate()
    console.log(editPlaylist)

    const showPlaylist = async () => {
        const token = localStorage.getItem("token")
        console.log(token);
        let response = await axios.get(`http://localhost:3001/playlist?token=${token}`)
        console.log(response.data);
        console.log(response);
        setUserPlaylists(response.data)
    }

    return (

        < div className="header">
            < div className="search">
                <input onKeyDown={(e) => { if (e.key === 'Enter') setSearchKeyWord(e.target.value) }} type="text" className="search-input" placeholder="What do you want to listen to?"></input>
            </div>
            < div className="user-interface">
                <div><img className="user-image" src="https://cdn4.iconfinder.com/data/icons/rounded-black-basic-ui/139/Profile01-RoundedBlack-512.png"></img></div>
                <div className="user-buttons">
                    <button className="user-button" onClick={() => { navi("/"); localStorage.removeItem('token'); }}>Logout</button>
                    <Link to="/layout/main/myplaylist"> <button className="user-playlist-button" onClick={() => showPlaylist()}>playlists Eria</button></Link>
                </div>
            </div>
        </div >

    )


}

export default Header