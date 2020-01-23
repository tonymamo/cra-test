import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Heading from '../components/Heading';
import Profile from '../components/Profile';

import { brandSecondary } from '../colors';
import data from '../data.json';

const StyledProfiles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  @media (min-width: 800px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
      width: 75%;
  }
`;

function Home() {
  return (
    <>
      <Heading color={brandSecondary}>Hello!</Heading>
      <StyledProfiles>
        {
          (Array.isArray(data) && data.length !== 0) && data.map((person) => (
            <Profile person={person} key={person.userName} />
          ))
        }
      </StyledProfiles>
    </>
  );
}

export default withRouter(Home);


