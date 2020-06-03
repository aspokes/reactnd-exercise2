import React, { Component } from 'react';

class LikedUsers extends Component {
   
  getUser(){
    let usr = '';
    const userid = Number(this.props.profileUserid);
    const users = this.props.users;
     console.log(users);
   	Object.keys(users).forEach(function (k) {
    	
     	if(userid === users[k].id){
      	usr = `<li key=${k}>${users[k].name}</li>`
     }
  }); 
    
    return usr;
  }

  render(){
    const { users, usersWhoLikedMovie, movieInfo } = this.props;
    return (
      <li key={movieInfo.id}>
        <h2>{movieInfo.name}</h2>
        <h3>Liked By:</h3>
      {!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (
          <p>None of the current users liked this movie.</p>
        ) : (
          <ul>
            {usersWhoLikedMovie &&
              usersWhoLikedMovie.map(userId => {
                return (
                  <li key={userId}>
                    <p>{users[userId].name}</p>
                  </li>
                );
              })}
          </ul>
        )}
      </li>
      )
  }
}

export default LikedUsers;