import React, { useEffect, useState } from 'react';
import './App.scss';
import TileGrid from './components/tile-grid/tile-grid'

function App() {
    const [tiles, setTiles] = useState({})

  useEffect(() => {
    fetch('https://api-news.prd.shows.itv.com/discovery/national/top-stories')
        .then(res => res.json())
        .then(response => setTiles(response));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
       ITV News
      </header>
      <TileGrid
        items={tiles.items}
        heading={tiles.title}
        showDate
        showSummary
      />
    </div>
  );
}

export default App;
