import React, { useEffect, useState } from 'react';
import './App.scss';
import TileGrid from './components/tile-grid/tile-grid'

function App() {

  const [tiles, setTiles] = useState({})
  const [isBusy, setBusy] = useState(true)
  const [errorMsg, setError] = useState("")
  useEffect(() => {
    setBusy(true)
     fetch('https://api-news.prd.shows.itv.com/discovery/national/top-stories').then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong').toString();
        }
      })
      .then((responseJson) => {
         setTiles(responseJson) ;
         
         setBusy(false);
      })
      .catch((error) => {      
        
        console.log("thisis the error",error)
        setError(error);
        setBusy(false);
      });     
  }, []);
  
  
 

  return (
    <div className="App">
      <header className="App-header">
        ITV News
      </header>
      <TileGrid
          errorMsg={errorMsg}
          isBusy={isBusy}
          items={tiles.items }
          heading={tiles.title}
          showDate
          showSummary
        />
       
      
    </div>
  );


}
 


export default App;
