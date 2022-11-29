import React from "react";
import "../Header/header.css"
function Search_Bar({ setKeyWord }) {

    const enter = (e) => {
        if (e.key === 'Enter') setKeyWord(e.target.value)
    }

    return (
        < div className="search">
            <input onKeyDown={enter} type="text" className="search-input" placeholder="Enter your"></input>
        </div>

    )


}

export default Search_Bar




