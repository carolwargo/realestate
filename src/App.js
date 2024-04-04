import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage"; 
import Navigation from "./components/Navigation"; 
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter basename="/realestate">
      <Navigation />
      <Header />
        <Routes>
        <Route path="/" element={<HomePage />}/>  
       </Routes>
      </BrowserRouter>
  
  );
}

export default App;
