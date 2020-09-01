import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import './App.css';
import Header from './components/header';
import Search from './components/search';
import ErrorBoundary from './components/ErrorBoundary';
import FeaturedSongs from './components/featuredSongs';
import FavouriteList from './components/favouriteList';

function App() {

  return (
    <section className="App">
      <Header />
      <section className="main-section">
      <ErrorBoundary>
        <Search />
        </ErrorBoundary>
      </section>
      <footer className="footer">
        <ul>
          <li>Hemgatan 22</li>
          <li>070 583 24 86</li>
          <li>www.minsajt.se</li>
        </ul>
      </footer>
    </section>
  );
}

export default App;
