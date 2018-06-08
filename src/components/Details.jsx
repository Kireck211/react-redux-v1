import React from 'react';

const Details = () => (
  <div className="details">
    <img src="/public/img/movie_image.jpg" alt="Movie image" />
    <div>
      <h2>Title</h2>
      <h4>Rating: 8.1</h4>
      <div>Genres:<ul><li>Drama</li><li>Mystery</li><li>Thriller</li></ul></div>
      <h4>Budget: 4000000</h4>
      <h4>Revenue: 109676311</h4>
      <h4>Released: 19-10-2006</h4>
      <p>
        A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.
      </p>
    </div>
  </div>
);

export default Details;
