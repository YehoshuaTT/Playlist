import { Link, useNavigate } from "react-router-dom";

function Header({ setSearchKeyWord }) {
    const navi = useNavigate()




    return (

        < div className="header">
            < div className="user-interface">
                <h5 className="username">{"username"}</h5>
                <img className="user-image" src="https://cdn4.iconfinder.com/data/icons/rounded-black-basic-ui/139/Profile01-RoundedBlack-512.png"></img>
                <button className="user-button" onClick={() => { navi("/"); localStorage.removeItem('token'); }}>Logout</button>
                <Link className="link-to-user" to="/layout/myplaylist"> <button className="user-playlist-button" >My playlists</button></Link>
            </div>
            < div className="search">
                <input onKeyDown={(e) => { if (e.key === 'Enter') setSearchKeyWord(e.target.value) }} type="text" className="search-input" placeholder="What do you want to listen to?"></input>
            </div>
        </div >

    )


}

export default Header