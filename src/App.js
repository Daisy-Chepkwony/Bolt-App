import './App.css';
// import {Routes, Route, Navigate } from "react-router-dom";
import BotArmy from './components/profiles/BotArmy';
import './components/profiles/BotCollection'
import BotCollection from './components/profiles/BotCollection';
import Home from './components/profiles/Home';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BotCollection/>
        <Home/>
        
        
        <h1>jebby</h1>
      </header>
    </div>
  );
}

export default App;






