## Welcome to React-Redux fundamentals course

This course is intended to help you to understand React and all the things that came along with it.
If you find any mistake, error or comentary please reach me at **erickdesantiago11@gmail.com**.

[Website](http://programacioncompetitivaiteso.me/react-redux-v1/)

### Setup
In order to be able to complete this workshop, we need to download some tools:

* node.js 6+
* Yarn and add it to your bin path
* Code editor of your election
* Google chrome browser

#### Yarn installs
After installing Yarn we need to add some tools using yarn

```
yarn global add jest@v19.0.2
yarn global add nodemon
yarn global add webpack@2.2.1
yarn global add prettier@v0.22.0
yarn global add eslint@v3.18.0
```

Now we need to install all dependencies for the the project

```
yarn install
```

#### Configure Webpack and Babel

Webpack helps to bundle all your react code into one file.
Babel transforms your ES6 javascript to valid ES5 javascript used by most modern browsers.

To configure webpack in your project you need to add a webpack.config.js file in your root directory

```javascript
const path = require('path');

module.exports = {
  context: __dirname,
  entry: path.join(__dirname, 'src/components/App.jsx'),
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};
```

We need to create a .babelrc file at your root directory to configure babel

```json
{
  "presets": [
    "react",
    ["env", {
    "targets": {
      "browsers": "last 2 versions"
    },
    "modules": false,
    "loose": false
    }]
  ],
  "plugins": [
    "transform-class-properties"
  ],
  "env": {
    "test": {
    "plugins": [
        "transform-es2015-modules-commonjs"
    ]
    }
  }
}
```

#### v1-1

Create index.html file at your root directory.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>React Redux Fundamentals v1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="/public/style.css" />
</head>
<body>
    <div id="app"></div>
    <script src="/public/bundle.js"></script>
</body>
</html>
```

### Tools

#### Eslint

Eslint is a tool hepling the developer to use a standarized coding style and help preventing bugs and errors.

To make use of Eslint in your code Editor you should follow the instructions of your code editor and create a .eslintrc.json file in your root directory.

```json
{
  "extends": [
    "plugin:flowtype/recommended",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "flowtype",
    "prettier"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
	"prettier/prettier": [
		"error",
		{
			"trailingComma": "es5",
			"singleQuote": true,
			"printWidth": 120,
			"tabWidth": 2,
			"useTabs": false
		}
	],
  "env": {
    "es6": true,
    "jest": true,
    "browser": true,
    "node": true
  }
}
```

Also you need to add .eslintignore file in your root directory.

```
node_modules/
public/
```

Modify webpack.config.js

```javascript
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};
```

#### Prettier

Prettier help your team normalize how javascript code looks.

#### Flow

Flow checks your arguments types and help linting your jsx files

Create .flowconfig to the root directory

```
[ignore]
<PROJECT_ROOT>/node_modules/styled-components/*

[include]

[libs]
styled-components

[options]
```

#### v1-1

Create Home

```jsx
<div className='app'>
  <div className='home'>
    <h1>Tieso Movies</h1>
    <div>
      <h5>Search:</h5>
      <input type='text' />
    </div>
    <a href='#'>or Browse All</a>
  </div>
</div>
```

Create Search

```jsx
<div>
  <header>
    <h2>Home</h2>
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
```

#### v1-2

Insert structure to Search
```jsx
<div className='app'>
  <header>
    <h2>Home</h2>
    <input type='text' />
  </header>
</div>
```

Insert col_3 to Search
```JSX
<div className='col col_3'>
  <div>
    <img src="" alt="Movie image"/>
    <div>
      <h3>Movie1</h3>
      <span>Rating: 7.5</span>
    </div>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare diam, eu scelerisque nibh. Vestibulum facilisis fermentum metus in fringilla. Pellentesque habitant morbi tristique.</p>
</div>
```

Insert col_2 to Search 
```jsx
<div className='col col_2'>
  <img src="" alt="Movie image"/>
  <div>
  <h3>Movie1</h3>
  <span>Rating: 7.5</span>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare diam, eu scelerisque nibh. Vestibulum facilisis fermentum metus in fringilla. Pellentesque habitant morbi tristique.</p>
  </div>
</div>
```

Insert col_1 to Search
```jsx
<div className='col col_1'>
  <img src="" alt="Movie image"/>
  <div>
    <h1>Movie1</h1>
    <h4>Rating: 7.5</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare diam, eu scelerisque nibh. Vestibulum facilisis fermentum metus in fringilla. Pellentesque habitant morbi tristique.</p>
  </div>
</div>
```

### v1-3

Add Single Page behavior

```jsx
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Details from './Details';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/details/:id" component={Details} />
        <Route default component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
  );

render(React.createElement(App), document.getElementById('app'));
```

Add Link component to both Search and Home

Create Details
```jsx
<div className='details'>
  <img src='/public/img/movie_image.jpg' alt='Movie image' />
  <div>
    <h2>Title</h2>
    <h4>Rating: 8.1</h4>
    <div>Genres:<ul><li>Drama</li><li>Mystery</li><li>Thriller</li></ul></div>
    <h4>Budget: 4000000</h4>
    <h4>Revenue: 109676311</h4>
    <h4>Released: 19-10-2006</h4>
    <p>A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.</p>
  </div>
</div>
```

Add Link component to Search card

### v1-4

Introduce State and Props definitions

Add state to Details, use axios, use componentDidMount and API

Add state to Search

Add Flow integration

```json
{
  "extends": [
    "plugin:flowtype/recommended",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "flowtype",
    "prettier"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "jest": true,
    "browser": true,
    "node": true
  }
}
```

### v1-5

Review data flow in React

Add Redux concepts to flow in React

Implement Redux store, actions and reducers

Add Redux-thunk concepts

Implement thunk in async tasks
