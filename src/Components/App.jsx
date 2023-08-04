import React from "react";
import Home from "./Home";
import Productdesc from "./Productdesc";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:id" element={<Productdesc />} />
        </Routes>
      </Router>
    );
}

export default App;