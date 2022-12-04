import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersInfo from "./user.info"

function UserLogin({ setCanLog }, props) {

    let updatedUsers = usersInfo

    const [currentForm, setCurrentForm] = useState("Login")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [gender, setGender] = useState("")
    const [dob, setDob] = useState("")

    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault()
        let user = {
            email: email,
            password: pass,
            fName: fName,
            lname: lName,
            gender: gender,
            dob: dob
        }
        if (currentForm === "Login") {
            if (updatedUsers.find((v) => v.email === user.email && v.password == user.password) === undefined) alert("Worng Email or Password")
            else {
                setCanLog(true)
                navigate("/layout/main/LHCob76kigA")
            }
        }
        else {
            for (let i = 0; i < Object.keys(user).length; i++) {
                if (user[Object.keys(user)[i]] == "") {
                    alert("You must fill All fields")
                    break
                }
                if (i == Object.keys(user).length - 1) {
                    updatedUsers.push(user)
                    console.log(updatedUsers);
                    setCanLog(true)
                    navigate("/layout/main/LHCob76kigA")
                }
            }
        }
    }

    return (
        <div className="user-login-interface">
            <h1 id="login-h1">Your Playlist</h1>
            <h4 id="login-h4">login</h4>
            <form id="login-form" onSubmit={handelSubmit}>
                {currentForm === "Register" ?
                    <>  <label htmlFor="fName">First Name</label>
                        <input className="login-input" type="fName" placeholder="First Name" name="First Name" onChange={(e) => setFName(e.target.value)} ></input>
                        <label htmlFor="lname">Last Name</label>
                        <input className="login-input" type="lname" placeholder="Last Name" name="Last Name" onChange={(e) => setLName(e.target.value)} ></input>
                    </> : null}
                <label htmlFor="email">Email</label>
                <input className="login-input" type="email" placeholder="YourEmail@gmail.com" name="email" onChange={(e) => setEmail(e.target.value)} ></input>
                <label htmlFor="password">Password</label>
                <input className="login-input" type="password" placeholder="*********" id="passwor-input" name="password" onChange={(e) =>
                    setPass(e.target.value)}></input>

                {currentForm === "Register" ? <>
                    <label htmlFor="dob">Birth Date</label>
                    <input className="login-input" type="text" placeholder="YYYY/MM/DD" name="date" onChange={(e) => setDob(e.target.value)} ></input>
                    <div id="gender-div">
                        <label htmlFor="gender">Gender</label>
                        <select className="login-input" id="cars" onChange={(e) => setGender(e.target.value)}>
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>  </> : null}
                <button id="login-button"> {` ${currentForm} `} </button>
            </form>
            {currentForm === "Login" ?
                <><button className="reg-log-button" onClick={() => setCurrentForm("Register")}> Not registerd? click here </button></> :
                <><button className="reg-log-button" onClick={() => setCurrentForm("Login")}> Registerd? click to login </button></>
            }
        </div >
    )
}

export default UserLogin

