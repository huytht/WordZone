import React from "react";
import { Link } from "react-router-dom";
import CrossWord from "./components/CrossWord";
import NavbarCrossWord from "./components/NavbarCrossWord";
import Introduction from "./components/Introduction";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App(){
  return (
    <Router>
      <NavbarCrossWord/>
      <Routes>
      <Route path="/" exact element={<Introduction />} />
      <Route path="/play" exact element={<CrossWord />} />
      </Routes>
    </Router>
    
  )
}
export default App;