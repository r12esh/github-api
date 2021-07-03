import React, {useState, useEffect} from 'react';


const Bio = ({user}) => {

  return (
    <div className="bio">
      <img src={user.avatar_url} alt="" />
      <h3>Name : {user.name}</h3>
      <h3>Followers : {user.followers}</h3>
      <h3>Bio : {user.bio}</h3>
      <h3>Location : {user.location}</h3>
    </div>
  );
}

export default Bio;
