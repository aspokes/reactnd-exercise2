import React, { Component } from 'react';
import LikedUsers from './LikedUsers';

class FavoriteMovies extends Component {
  
  constructor(props) {
    super(props);
    this.usersProfiles = {};

    this.props.profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID;

      if (this.usersProfiles[movieID]) {
        this.usersProfiles[movieID].push(profile.userID);
      } else {
        this.usersProfiles[movieID] = [profile.userID];
      }
    });
  }
  
  render(){
    const { movies, users } = this.props;
    
     const userProfiles = Object.keys(movies).map(id => (
      <LikedUsers
        key={id}
        users={users}
        usersWhoLikedMovie={this.usersProfiles[id]}
        movieInfo={movies[id]}
      />
    ));
    		

    return (
      <div>
     <ul>
      {userProfiles}
      </ul>
	</div>
      )
  }
}

export default FavoriteMovies;