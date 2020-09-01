import React from 'react';

class FeaturedSongs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: true,
            songOne: [],
            songTwo: [],
            songThree: []
         }
    }

    componentDidMount() {
        const KEY = '08068492c90f845955929246b3b293b1';
        const API = `https://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/${Math.floor(Math.random() * 999)}`;
        const songOne = fetch(API)
                .then(response => response.json())
                .then(data => this.setState({ songOne: data }));
        const songTwo = fetch(API)
                .then(response => response.json())
                .then(data => this.setState({ songTwo: data }));
        const songThree = fetch(API)
                .then(response => response.json())
                .then(data => this.setState({ songThree: data }));
    }


    render() { 
        console.log(this.state.songOne);
        return ( 
            <div className="featured-songs-container">
                <div className="song-one">
                    <h2>{this.state.songOne.name}</h2>
                    <img src={this.state.songOne.picture_big} alt="artist_image"/>
                </div>
                <div className="song-two">
                    <h2>{this.state.songTwo.name}</h2>
                    <img src={this.state.songTwo.picture_big} alt="artist_image"/>
                </div>
                <div className="song-three">
                    <h2>{this.state.songThree.name}</h2>
                    <img src={this.state.songThree.picture_big} alt="artist_image"/>
                </div>
            </div>
         );
    }
}
 
export default FeaturedSongs;