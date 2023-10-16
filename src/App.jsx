import { useState } from "react"
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";

function App() {

  return (
   <Routes>
    <Route path="/" element={""} >
      <Route index element={<Home/>}/>
    </Route>
   </Routes>
  )
}

export default App
