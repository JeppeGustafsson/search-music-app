import React, {useEffect, useState} from 'react';
import FavouriteList from './favouriteList';

const Song = ({title, subtitle, image, smallText, audio}) => {

    const [favourite, setFavourite] = useState(false);

    const handleFavourite = () => {
        if (favourite === false) {
            setFavourite(true);
        } else {
            setFavourite(false);
        }
    }

    return (
        <article className="song-item">
        <img src={image} size="medium" alt="song-image" />
        <article className="text-box">
            <button onClick={() => handleFavourite()} className={favourite === true ? "favourite-check checked" : "favourite-check"}>

            </button>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>Rank: {smallText}</p>
            <audio controls>
                <source src={ 
                    audio
                 } />
            </audio>
        </article>
  </article>
    )
}

export default Song;