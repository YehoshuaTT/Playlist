import React from "react";
import "../Header/header.css"
function Search_Bar({ setKeyWord }) {

    const enter = (e) => {
        if (e.key === 'Enter') setKeyWord(e.target.value)
    }

    return (
        < div >
            <input onKeyDown={enter} type="text" className="search-input" ></input>
            search bar
        </div>

    )


}

export default Search_Bar




