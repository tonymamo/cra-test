import React from 'react';
import { withRouter } from 'react-router-dom';

import Heading from '../components/Heading';
import Profile from '../components/Profile';
import Row from '../components/Row';
import Column from '../components/Column';

import { brandSecondary } from '../colors';
import data from '../data.json';

function Home() {
  return (
    <>
      <Heading color={brandSecondary}>Hello!</Heading>
      <Row>
        {
          (Array.isArray(data) && data.length !== 0) && data.map((person) => (
            <Column key={person.userName} sm={6} md={4}><Profile person={person} /></Column>
          ))
        }
      </Row>
    </>
  );
}

export default withRouter(Home);
