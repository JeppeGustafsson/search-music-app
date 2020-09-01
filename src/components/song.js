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
        <div className="song-item">
        <img src={image} size="medium" alt="song-image" />
        <div className="text-box">
            <div onClick={() => handleFavourite()} className={favourite === true ? "favourite-check checked" : "favourite-check"}>

            </div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>Rank: {smallText}</p>
            <audio controls>
                <source src={ 
                    audio
                 } />
            </audio>
        </div>
  </div>
    )
}

export default Song;