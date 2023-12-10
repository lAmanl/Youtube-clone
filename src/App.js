import './App.css';
import Header from './Header.js'
import SideBar from './Sidebar.js'
import MainSection from './MainSection.js'
import Home from "./Home_page.js"
import Search from "./Search.js"
import { BrowserRouter as Router , Routes, Route, } from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Router> */}
        <Routes>
          <Route path="/search/:searchTerm" element={<Search />}>
          </Route>
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
      {/* </Router> */}
      
    </div>
  );
}

export default App;
