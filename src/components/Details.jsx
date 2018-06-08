// @flow
import React, { Component } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${rotate} 2s linear infinite;
`;

const SpinnerWrapper = styled(Spinner)`
  position: relative;
`;

class Details extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    setTimeout(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=1fac769be7e3631475aaa42921dc376c`
        )
        .then(response => this.setState({ movie: response.data }));
    }, 3000);
  }

  props: {
    id: string
  };

  render() {
    const { movie } = this.state;
    if (Object.keys(movie).length === 0 && movie.constructor === Object) {
      return <SpinnerWrapper />;
    }
    return (
      <div className="details">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="Movie"
        />
        <div>
          <h2>{movie.title}</h2>
          <h4>Rating: {movie.vote_average}</h4>
          <div>
            Genres:
            <ul>
              {movie.genres.map(genre => (
                <li key={genre.name}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <h4>Budget: {movie.budget}</h4>
          <h4>Revenue: {movie.revenue}</h4>
          <h4>Released: {movie.release_date}</h4>
          <p>
            A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.
          </p>
        </div>
      </div>
    );
  }
}

export default Details;
