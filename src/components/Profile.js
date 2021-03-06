import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import Heading from '../components/Heading';
import Box from '../components/Box';

import { brandPrimary, brandSecondary } from '../colors';

const StyledProfileHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledProfilePic = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid #dddddd;
  margin: 16px;
`;

const StyledProfileRepos = styled.ol`
`;

const StyledProfileRepoLink = styled.li`
  color: ${brandSecondary};
  text-decoration: none;
`;

const StyledProfileLink = styled.a`
  color: ${brandSecondary};
  &:hover {
    filter: brightness(115%);
  }
`;

const createName = (person) => {
  return `${person.firstName} ${person.lastName}`;
}

const visitGithub = (person) => {
  return window.location = `https://github.com/${person.userName}`;
}

const Profile = ({ person }) => (
  <Box>
    <StyledProfileHeader>
      <StyledProfilePic className="profile-pic" src={person.imgPath} alt="profile pic" />
      <Link to={`/user/${person.userName}`}><Heading color={brandSecondary}>{createName(person)}</Heading></Link>
      <Button
        size="small"
        color={brandPrimary}
        onClick={() => visitGithub(person)}
      >
        {`@${person.userName}`}
      </Button>
    </StyledProfileHeader>
    <StyledProfileRepos>
      {
        person.repositories.map((item) => (
          <StyledProfileRepoLink key={item.url}>
            <StyledProfileLink href={item.url}>{item.name}</StyledProfileLink>
            <span> {item.stars} &#10026;</span>
          </StyledProfileRepoLink>
        ))
      }
    </StyledProfileRepos>
  </Box>
);

export default Profile;
