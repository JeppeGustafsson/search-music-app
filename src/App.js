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

  const ParallaxBubbles = () => (
    <Parallax className="parallax-bubble" y={[-20, 20]} tagOuter="figure">
    </Parallax>
  )

  return (
    <div className="App">
      <Header />
      <main className="main">
      <ErrorBoundary>
        <Search />
        </ErrorBoundary>
      </main>
      <FavouriteList />
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
