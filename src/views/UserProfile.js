import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

import Heading from '../components/Heading';
import Row from '../components/Row';
import Column from '../components/Column';
import Box from '../components/Box';

import { quadrupleSpacer } from '../sizes';

const Avatar = styled.img`
  width: ${quadrupleSpacer};
  border-radius: ${quadrupleSpacer};
`;

function UserProfile(props) {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { userName } = useParams();

  // since we pass the userName in the URL, we now use the data passed into the route
  // and filter out which user it is by comparing the userName from useParams
  const user = props.data.filter((user) => user.userName === userName)[0];

  return (
    <div>
      <Row>
        <Column md={4}>
          <Avatar src={user.imgPath} />
          <Heading>{user.firstName} {user.lastName}</Heading>
          <p>{user.userName}</p>
          <hr />
          <p>{user.location}</p>
          <p>{user.email}</p>
          <p>{user.website}</p>
        </Column>
        <Column md={8}>
          <Heading>Repositories</Heading>
          <Row>
          {
            user.repositories.map((repo) => (
              <Column key={repo.url} xl={6}>
                <Box>
                  <Row>
                    <Column sm={9}>
                      <p><a href={repo.url}>{repo.name}</a></p>
                      <p>{repo.type} - {repo.lastUpdated}</p>
                    </Column>
                    <Column sm={3}>
                      <p>{repo.stars} stars</p>
                    </Column>
                  </Row>
                </Box>
              </Column>
            ))
          }
          </Row>
        </Column>
      </Row>
    </div>
  );
}

export default UserProfile;
