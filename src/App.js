import {  useState } from "react";
import {  Route , Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import UserLogin from "./components/UserLogin/UserLogin";

function App() {
  const [canLog, setCanLog] = useState(false)
  const [myPlaylist, setMyPlaylist] = useState([])
  const [playlist, setPlaylist] = useState([])
  console.log(playlist);
  console.log(`can log? ${canLog}`);
  
  
  return (    
    <div> 
    <Routes> 
        <Route path="/layout/"element={<Layout setCanLog={setCanLog} myPlaylist={myPlaylist} setMyPlaylist={setMyPlaylist} playlist={playlist}  setPlaylist={setPlaylist}/>}>
        <Route path="/layout/main/*" element={<Main myPlaylist={myPlaylist} setMyPlaylist={setMyPlaylist} setPlaylist={setPlaylist}/>} />
      
        </Route>
        <Route path="/" element={<UserLogin setCanLog={setCanLog}/>}/>
 </Routes>
  </div>
  

  );
}

export default App;
