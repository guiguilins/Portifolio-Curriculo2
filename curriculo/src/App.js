import React from 'react';
import { NavBar } from "./components/NavBar";
import { Skills } from "./components/Skills";
import { Banner } from "./components/Banner";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
      <div className="App">
        <NavBar />
        <Skills />
        <Banner />
        <gui /> 
        </div>
  );
}


export default App;