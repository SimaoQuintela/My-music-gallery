import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {bands} from './records.js';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Albums from './Record.js'

/*
function takeTheTitles(artist){
  let titles = [];

  if(artist === '')
    return titles;

  // loop backwards so that the titles are displayed in the right way
  for(let i=bands.length-1; i>=0; i--){

    if(artist === bands[i].artist){
      for(let j = 0; j<bands[i].albums.length; j+=1){
        titles.push(bands[i].albums[j].title);
      }
    }
  }

  return titles;
}
*/

function App() {
  const [searchString, setSearchString] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');

  const handleClick = (e) => {
      setArtist(e.target.value)

  };

  return(
    <React.Fragment>
      <header>
        <h2>My Music Gallery</h2>
        <div id="scroll-container">
          <div id="scroll-text"><i>"I see music as fluid architecture"</i> - Joni Mitchell &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i>"The great thing about Rock N Roll is that someone like me can be a star"</i> - Elton John 
          </div>
        </div>
      </header>
        <div className='search-bar-container'>
          <input id='search-bar' type='text' value={searchString} onChange={ (e) => setSearchString(e.target.value)} placeholder='Type the name of your favorite artist/band'/>
        </div>
        <div className='select-to-filter'>
          <select id='artists' name='artists'>
            <option value='' onClick={handleClick} defaultValue >Artist</option>
            {
              bands.map((bands) => {
                return(<option name={bands.artist} value={bands.artist} onClick={handleClick}>{bands.artist}</option>);
              })
            }
          </select>
          <select id='albums' name='albums'>
            <option value='' onClick={ (e) => setAlbum(e.target.value)} defaultValue >Album</option>
            {  
              bands.map((band) => {
                if(artist === '') {  
                  return(
                    (band.albums).map((titles) => {
                      return (<option name={titles.title} value={titles.title} onClick={ (e) => setAlbum(e.target.value)}>{titles.title}</option>);
                    })
                  );
                } else {
                  if(band.artist === artist){
                    return(
                      (band.albums).map((titles) => {
                        return (<option name={titles.title} value={titles.title} onClick={ (e) => setAlbum(e.target.value)}>{titles.title}</option>);
                      })
                    );
                  } else 
                    return null;      
                }
              }) 
            }
            
          </select>
        </div>
        <div className='records-container'>
            <Albums artist={artist} album={album} textBarInput={searchString}></Albums>
        </div>
    </React.Fragment>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();

/*              bands.map((band) => {
                    return(
                      (band.albums).map((titles) => {
                        return (<option name={titles.title} value={titles.title} onClick={ (e) => setAlbum(e.target.value)}>{titles.title}</option>);
                      })
                    );
                }) */