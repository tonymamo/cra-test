import React from 'react';
import './profile.css';
import Button from '../components/Button';
import Heading from '../components/Heading';

const createName = (person) => {
  return `${person.firstName} ${person.lastName}`;
}

const Profile = ({ person }) => (
  <div className="profile-wrapper">
    <div className="profile-header">
      <img className="profile-pic" src={person.imgPath} alt="profile pic" />
      <Heading>{createName(person)}</Heading>
      <Button
        link={`https://github.com/${person.userName}`}
        size="small"
        color="teal"
        disabled
      >
        {`@${person.userName}`}
      </Button>
    </div>
    <ol className="profile-repositories">
      {
        person.repositories.map((item) => (
          <li key={item.url}><a className="profile-repo-link" href={item.url}>{item.name}</a></li>
        ))
      }
    </ol>
  </div>
);

export default Profile;
