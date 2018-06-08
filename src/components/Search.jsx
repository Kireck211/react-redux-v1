// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Col from './Col';
import payloads from '../../data.json';

class Search extends Component {
  render() {
    let rows;
    const cols = payloads.movies.length % 3;
    let type;
    if (cols === 0) {
      type = 3;
      rows = Array(...{ length: payloads.movies.length / 3 }).map(
        Number.call,
        Number
      );
    } else if (cols === 1) {
      type = 2;
      rows = Array(...{ length: payloads.movies.length / 2 }).map(
        Number.call,
        Number
      );
    } else {
      type = 1;
      rows = Array(...{ length: payloads.movies.length }).map(
        Number.call,
        Number
      );
    }
    console.log(rows);
    return (
      <div>
        <header>
          <h2><Link to="/">Home</Link></h2>
          <input type="text" placeholder="Search Movie" />
        </header>
        {rows.map((row, index) => (
          <div className="row wrapper">
            {payloads.movies
              .slice(index * type, index * type + type)
              .map(movie => (
                <Col
                  type={type}
                  imageUrl={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  title={movie.title}
                  rating={movie.vote_average}
                  description={movie.overview}
                />
              ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Search;
