import React from 'react';

const Profile = ({ imageSource, first, last }) => (
  <div className="profile-wrapper">
    <img className="profile-pic" src={imageSource} alt="profile pic" />
    <h1>{first} {last}</h1>
  </div>
);

export default Profile;
