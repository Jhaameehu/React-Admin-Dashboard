import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Cards from './components/Cards/Cards';


function App() {
  return (
      
  <div className="grid-container">
  <header className="header"><Header /></header>
  <div className="sidenav"><Sidebar /></div>
  <main className="main"><Cards /></main>
</div>
      
      
  );
}

export default App;
