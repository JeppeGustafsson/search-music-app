import React, {useEffect, useState} from 'react';
import SongItem from './song';
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

    apiCall = (input,increment,limit) => {
        const KEY = '08068492c90f845955929246b3b293b1';
        const newAPI = `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/track/autocomplete?index=${increment}&limit=${limit}&q=${input}`;
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
        this.apiCall(this.state.searchValue,0,20);
        this.setState({ isActive: false });
    }

    handleIncrement = () => {
        this.apiCall(this.state.searchValue,0,this.state.results.length + 20);
    }

    render() {
        return (
            <section className={this.state.isActive === true ? "search active" : "search"}>
                <article className="textContent">
                    <h1>Find your tune</h1>
                    <p>Search for your favourite artist or song</p>
                 </article>
                <input placeholder="Search..." value={this.state.searchValue} onChange={event => this.handleChange(event)} type="text"/>
                <button onClick={this.state.isActive === false ? this.handleActive : this.handleSearch} className="search-btn">
                    {this.state.isActive === true ? "Go" : "Search"}
                </button>
                {/* <h2 className={this.state.results.length < 1 ? "top-title" : "top-title active"}>Showing results for: {this.state.searchValue}</h2> */}
                 <section className="output">
                  {
                      this.state.results.map(song => {
                        return <SongItem 
                                    key={song.id}
                                    title={song.artist.name}
                                    subtitle={song.title_short}
                                    smallText={song.rank}
                                    audio={song.preview}
                                    image={song.album.cover_medium}
                                />
                      })
                  }
                  <button onClick={this.handleIncrement} className={this.state.results.length < 1 ? "see-more" : "see-more active"}>See more</button>
                </section>
            </section>
        )
    }
}

export default Search;