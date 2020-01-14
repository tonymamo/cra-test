import React from 'react';
import './profile.css';
import Button from '../components/Button';
import Heading from '../components/Heading';

import { brandDanger } from '../colors';

const createName = (person) => {
  return `${person.firstName} ${person.lastName}`;
}

const Profile = ({ person, onClick }) => (
  <div className="profile-wrapper">
    <div className="profile-header">
      <img className="profile-pic" src={person.imgPath} alt="profile pic" />
      <Heading color={brandDanger}>{createName(person)}</Heading>
      <Button
        link={`https://github.com/${person.userName}`}
        size="small"
        color={brandDanger}
      >
        {`@${person.userName}`}
      </Button>
    </div>
    <ol className="profile-repositories">
      {
        person.repositories.map((item) => (
          <li key={item.url}><a className="profile-repo-link" href={item.url} onClick={onClick}>{item.name}</a><span> {item.stars} &#10026;</span></li>
        ))
      }
    </ol>
  </div>
);

export default Profile;
