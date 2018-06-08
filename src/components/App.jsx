// @flow
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
        <Route
          path="/details/:id"
          component={(props: {
            match: {
              params: {
                id: string
              }
            }
          }) => <Details id={props.match.params.id} />}
        />
        <Route default component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(React.createElement(App), document.getElementById('app'));
