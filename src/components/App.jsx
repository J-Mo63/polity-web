import React, { Component } from 'react';
import ArticleContainer from '../containers/ArticleContainer'
import NavigationContainer from '../containers/NavigationContainer'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from "../containers/HomeContainer";

export default class App extends Component {
  render() {
      return (
          <div>
              <NavigationContainer />
              <Switch>
                  <Route exact path='/' component={ HomeContainer } />
                  <Route exact path='/:articleTitle' component={ ArticleContainer } />
              </Switch>
          </div>
      );
  }
}
