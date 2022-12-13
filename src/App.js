import {  Route , Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserLogin from "./components/UserLogin/UserLogin";

function App() {
  
  return (    
    <div className="app"> 
    <Routes> 
        <Route path="/layout/*" element={<Layout/>}/>
        <Route path="/" element={<UserLogin />}/>
 </Routes>
  </div>
  
  );
}

export default App;
