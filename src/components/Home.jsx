import React from 'react'
import {Link } from 'react-router-dom'

const Home = () => (
        <div className='home'>
        <h1>Tieso Movies</h1>
        <div>
          <h5>Search:</h5>
          <input type='text' />
        </div>
        <Link to='/search'>or Browse All</Link>
      </div>
)

export default Home;