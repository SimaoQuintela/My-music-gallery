import React from 'react';
import {bands} from './records.js';
import './Record.css';


function takeTheIndexOfTheArtist(artist){

    for(let i=0; i< bands.length; i+=1){
        if(bands[i].artist === artist)
            return i;
    }
    return -1;
}

function takeTheIndexOfTheAlbum(indexOfTheArtist, album){

    for(let i = 0; i<bands[indexOfTheArtist].albums.length; i+=1){
        if(bands[indexOfTheArtist].albums[i].title === album )
            return i;
    }

    return -1;
}

const Albums = ({artist, album, textBarInput}) => {   
    console.log(artist);
    console.log(album);

    if(textBarInput === ''){ 
        if(artist === '' && album === ''){
            return(<h1 className='text-info'>Select an artist/band or use the search bar</h1>);
            
        } else if (artist === '' && album !== '') {
            return( <h1 className='text-info'>Select an artist/band so my work gets easier mate</h1> );
            
            // return the albums of the artist
        } else if(artist !== '' && album === '') {
            let indexOfTheArtist = takeTheIndexOfTheArtist(artist);                     // -1 means not found    |    >= 0   means found and return his position
            let artistAlbums =  bands[indexOfTheArtist].albums;
            return(artistAlbums.map((record) => <Record {...record}></Record>));
        } else {
            
            let indexOfTheArtist = takeTheIndexOfTheArtist(artist);                     // -1 means not found    |    >= 0   means found and return his position
            let indexOfTheAlbum = takeTheIndexOfTheAlbum(indexOfTheArtist, album);      // -1 means not found    |    >= 0   means found and return his position;

            if(indexOfTheAlbum === -1){                                                 // album doesn't correspond to that artist
                return(<h1 className='text-info'>Result not found</h1>);
            } else {                                                                    // display the specific album
                let targetAlbum = bands[indexOfTheArtist].albums[indexOfTheAlbum];      // shortcut to the target album
                return(<Record title={targetAlbum.title} spotifyLink={targetAlbum.spotifyLink} imageLink={targetAlbum.imageLink} releaseDate={targetAlbum.releaseDate}></Record>);
            }
        }
    } else {
        return(
            <h1 className='text-info'>I want to display the albums of {artist}</h1>
        );
    }
    

}

const Record = (props) => {
    const {title, releaseDate, imageLink, spotifyLink} = props;
    return(
        <div className='record'>
            <a href={spotifyLink} rel='noreferrer' target='_blank'><img src={imageLink} alt={title}></img></a>
            <p>{title}</p>
            <p>{releaseDate}</p>
        </div>
    );
}


export default Albums
