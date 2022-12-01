import { useState } from "react";
import { BrowserRouter, useParams } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserLogin from "./components/UserLogin/UserLogin";
function App() {
  const [canLog, setCanLog] = useState(false)
  let params = useParams()

  // const users = {
  //   username: "Admin",
  //   password: "Admin"
  // }


  // const authentication = (e) => {
  //   if (users.inclouds(e)) setAproove(true)

  // }

  return (
  <div>
    <BrowserRouter>
 {canLog?<Layout setCanLog={setCanLog} />:<UserLogin setCanLog={setCanLog}/>}
    </BrowserRouter>
  </div>
  );
}

export default App;
