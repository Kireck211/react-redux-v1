// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Col from './Col';
import payloads from '../../data.json';

class Search extends Component {
  fillArray = (value: number, len: number) => {
    const arr = [];
    for (let i = 0; i < len; i += 1) {
      arr.push(value + i);
    }
    return arr;
  };
  render() {
    let rows;
    const cols = payloads.movies.length % 3;
    let type;
    if (cols === 0) {
      type = 3;
      rows = this.fillArray(3, payloads.movies.length / 3);
    } else if (cols === 1) {
      type = 2;
      rows = this.fillArray(3, payloads.movies.length / 2);
    } else {
      type = 1;
      rows = this.fillArray(3, payloads.movies.length);
    }
    return (
      <div>
        <header>
          <h2><Link to="/">Home</Link></h2>
          <input type="text" placeholder="Search Movie" />
        </header>
        {rows.map((row, index) => (
          <div className="row wrapper" key={row}>
            {payloads.movies
              .slice(index * type, index * type + type)
              .map(movie => (
                <Col
                  type={type}
                  imageUrl={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  title={movie.title}
                  rating={movie.vote_average}
                  description={movie.overview}
                  key={movie.imdb_id}
                />
              ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Search;
