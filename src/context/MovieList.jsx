// React Class Components: Using Context
import React, { Component } from 'react';
import UserContext from './userContext';
import MovieRow from './MovieRow';

export default class MovieList extends Component {
  static contextType = UserContext;
  componentDidMount() {
    console.log('context', this.context);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List{' '}
            {userContext.currentUser ? userContext.currentUser.name : ''}
            <MovieRow></MovieRow>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}