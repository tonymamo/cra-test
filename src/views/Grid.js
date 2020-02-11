import React from 'react';

import Heading from '../components/Heading';
import Row from '../components/Row';
import Column from '../components/Column';
import Button from '../components/Button';
import Box from '../components/Box';
import Input from '../components/Input';

const Grid = () => (
  <div>
    <Row>
      <Column md={8}>
        <Box>
          <Heading>Ready to move?</Heading>
          <h2>Don't want to pay 6 to 8%?</h2>
          <p>adfajhdfa;sjdhfa;sldfhas;ljdfhasdfhasdf</p>
          <p>
            <Button block>Get Started Now</Button>
          </p>
        </Box>
      </Column>
      <Column md={4}>
        <Box>
          <Heading>Login</Heading>
          <div><Input type="text" /></div>
          <div><Input type="password" /></div>
          <p><Button block>Login</Button></p>
        </Box>
      </Column>
    </Row>
    
    <Row>
      <Column md={4}>
        <Box textAlign="center"><Heading>Tell us about your move</Heading></Box>
      </Column>
      <Column md={4}>
        <Box textAlign="center"><Heading>Tell us about your yourself</Heading></Box>
      </Column>
      <Column md={4}>
        <Box textAlign="center"><Heading>Sit back &amp; enjoy the savings</Heading></Box>
      </Column>
    </Row>
    
    <Row>
      <Column md={8}>
        <Box>
          <Row>
            <Column xs={5}>
              <img src="https://place-hold.it/300x200" alt="placeholder" />
            </Column>
            <Column xs={7}>
              <h5>Learn the basics of buying and selling a home</h5>
              <p>asdfasdfokjasd;flkjasdflkjasdfadkj</p>
            </Column>
          </Row>
        </Box>
      </Column>
      <Column md={4}>
        <Box textAlign="center"><Heading>13,600+</Heading></Box>
      </Column>
    </Row>
  </div>
);

export default Grid;
