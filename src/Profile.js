import React from 'react';

const Profile = ({ person }) => (
  <div className="profile-wrapper">
    <div className="profile-header">
      <img className="profile-pic" src={person.imgPath} alt="profile pic" />
      <h1 className="profile-heading">{person.firstName} {person.lastName}</h1>
    </div>
    <ul className="profile-repositories">
      {
        person.repositories.map((repo) => (
          <li key={repo.url}><a className="profile-repo-link" href={repo.url}>{repo.name}</a></li>
        ))
      }
    </ul>
  </div>
);

export default Profile;
