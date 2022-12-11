import {  Route , Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserLogin from "./components/UserLogin/UserLogin";

function App() {
  
  return (    
    <> 
    <Routes> 
        <Route path="/layout/*" element={<Layout/>}/>
        <Route path="/" element={<UserLogin />}/>
 </Routes>
  </>
  
  );
}

export default App;
