import React from 'react';
import './App.css';
import Header from './components/header';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <Search />
      </div>

      <footer className="footer">
        <ul>
          <li>Hemgatan 22</li>
          <li>070 583 24 86</li>
          <li>www.minsajt.se</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;