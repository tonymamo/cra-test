import React from 'react';

const createName = (person) => {
  return `${person.firstName} ${person.lastName}`;
}

const Profile = ({ person }) => (
  <div className="profile-wrapper">
    <div className="profile-header">
      <img className="profile-pic" src={person.imgPath} alt="profile pic" />
      <h1 className="profile-heading">{createName(person)}</h1>
      <p><a href={`https://github.com/${person.userName}`}>{person.userName}</a></p>
    </div>
    <ul className="profile-repositories">
      {
        person.repositories.map((item) => (
          <li key={item.url}><a className="profile-repo-link" href={item.url}>{item.name}</a></li>
        ))
      }
    </ul>
  </div>
);

export default Profile;
