import React from 'react';

const Song = ({title, song, image, rank, key}) => {

    return (
        <div className='song-item' key={key}>
            <div className='left'>
            <h2>{title}</h2>
            <h3>{song}</h3>
            <img src={image} alt=""></img>
            </div>
            <div className="right">
                <div>Rank: 
                   <span className='step-list'>{rank}</span>
                </div>
            </div>
            
        </div>
    )
}

export default Song;