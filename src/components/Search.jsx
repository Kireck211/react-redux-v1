import React from 'react'
import {Link} from 'react-router-dom'

const Search = () => (

      <div>
            <header>
        <h2><Link to='/'>Home</Link></h2>
        <input type='text' placeholder='Search Movie'/>
      </header>
        <div className='row wrapper'>
          <div className='col col_3'>
            <div>
              <img src="/public/img/movie_image.jpg" alt="Movie image"/>
              <div>
                <h3>Movie1</h3>
                <span>Rating: 7.5</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare diam, eu scelerisque nibh. Vestibulum facilisis fermentum metus in fringilla. Pellentesque habitant morbi tristique.</p>
          </div>
          <div className='col'>Movie 2</div>
          <div className='col'>Movie 3</div>
        </div>
        <div className='row wrapper'>
          <div className='col col_2'>
            <img src="/public/img/movie_image.jpg" alt="Movie image"/>
            <div>
            <h3>Movie1</h3>
            <span>Rating: 7.5</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare diam, eu scelerisque nibh. Vestibulum facilisis fermentum metus in fringilla. Pellentesque habitant morbi tristique.</p>
            </div>
          </div>
          <div className='col'>Movie 2</div>
        </div>
        <div className='row wrapper'>
          <div className='col col_1'>
            <img src="/public/img/movie_image.jpg" alt="Movie image"/>
            <div>
            <h1>Movie1</h1>
            <h4>Rating: 7.5</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare diam, eu scelerisque nibh. Vestibulum facilisis fermentum metus in fringilla. Pellentesque habitant morbi tristique.</p>
            </div>
          </div>
        </div>
      </div>
)

export default Search