import React from "react";
import "../Header/header.css"
function User(props) {

  return (
    < div className="user-interface">
      <div><img className="user-image" src="https://cdn4.iconfinder.com/data/icons/rounded-black-basic-ui/139/Profile01-RoundedBlack-512.png"></img></div>
      <div className="user-state">
        <div className="user-text">login</div>
        <div className="user-text">sign up</div>
      </div>
    </div>

  )


}

export default User
