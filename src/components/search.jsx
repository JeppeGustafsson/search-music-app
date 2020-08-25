import React from 'react';
import { trackPromise } from 'react-promise-tracker';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            searchValue: '',
            results: []
        }
    }

    apiCall = input => {
        const KEY = '08068492c90f845955929246b3b293b1';
        const API = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${input}&api_key=${KEY}&format=json`;
        const newAPI = `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/track/autocomplete?limit=30&q=${input}`;
        trackPromise(
            fetch(newAPI)
                .then(response => response.json())
                .then(data => this.setState({ results: data.data })));
    }

    handleActive = () => {
        if (this.state.isActive === false) {
            this.setState({ isActive: true });
        } else {
            this.setState({ isActive: false });
        }
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState({ searchValue: value });
    }

    handleSearch = () => {
        this.apiCall(this.state.searchValue);
        this.setState({ isActive: false });
    }

    render() {
        return (
            <div className={this.state.isActive === true ? "search active" : "search"}>
                <div className="textContent">
                    <h1>Musik för alla</h1>
                    <p>Sök på din favoritlåt eller artist</p>
                 </div>
                <input placeholder="Search..." value={this.state.searchValue} onChange={event => this.handleChange(event)} type="text"/>
                <button onClick={this.state.isActive === false ? this.handleActive : this.handleSearch} className="search-btn">
                    {this.state.isActive === true ? "Go" : "Search"}
                </button>
                 <div className="output">
                  {
                      this.state.results.map(song => {
                        return <div className="song-item" key={song.id}>
                                    <img src={song.album.cover_medium} size="medium" alt="song-image" />
                                    <div className="text-box">
                                        <h2>{song.artist.name}</h2>
                                        <h3>{song.title_short}</h3>
                                        <p>Rank: {song.rank}</p>
                                        <audio controls>
                                            <source src={ 
                                                song.preview
                                             } />
                                        </audio>
                                    </div>
                              </div>
                      })
                  }
                </div>
            </div>
        )
    }
}

export default Search;