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

    <Row>
      <Column>
        <Box>
          <Row>
            <Column xs={5}>
              <img src="https://place-hold.it/500x200" alt="placeholder" width="100%" />
            </Column>
            <Column xs={7}>
              <Heading>Some form of Marketing Title</Heading>
              <p>
                <Button>Learn More</Button>
              </p>
            </Column>
          </Row>
        </Box>
      </Column>
    </Row>
    
    <Row>
      <Column md={3}>
        <Box>
          <h2>My Personal Information</h2>
          <hr />
          <dl>
            <dt>Full Name</dt>
            <dd>Tony Mamo</dd>
            <dt>Email Address</dt>
            <dd>tmamo13991@gmail.com</dd>
            <dt>Phone Number</dt>
            <dd>(313) 555-6789</dd>
          </dl>
          <Button block>Edit Information</Button>
        </Box>
      </Column>
      <Column md={9}>
        <Box>
          <Row>
            <Column md={2}>
              <p>time remaining</p>
              <img src="https://place-hold.it/100x100" alt="placeholder" width="100%" />
            </Column>
            <Column md={10}>
              <h2>Sell My Home</h2>
              <address>
                12345 Main Street,<br />
                Detroit, MI 48204
              </address>
              <hr />
              <h3>Listing Details</h3>
              <Row>
                <Column sm={6}>
                  <strong>What is the mortgage balance?</strong>
                  <p>$279,000</p>
                </Column>
                <Column sm={6}>
                  <strong>Purchase price in mind?</strong>
                  <p>$350,000-$375,000</p>
                </Column>
              </Row>
              <hr />
              <h2>Winning Realtors</h2>
              <p>lorem ipsum dolor sit amet, ...</p>
              <Row>
                <Column sm={4}>
                  <Box textAlign="center">
                    <h3>Realtor One</h3>
                    <strong>Total Commission</strong>
                    <p>4.0%</p>
                    <strong>Compliance Fee</strong>
                    <p>$295</p>
                  </Box>
                </Column>
                <Column sm={4}>
                  <Box textAlign="center">
                    <h3>Realtor One</h3>
                    <strong>Total Commission</strong>
                    <p>4.0%</p>
                    <strong>Compliance Fee</strong>
                    <p>$295</p>
                  </Box>
                </Column>
                <Column sm={4}>
                  <Box textAlign="center">
                    <h3>Realtor One</h3>
                    <strong>Total Commission</strong>
                    <p>4.0%</p>
                    <strong>Compliance Fee</strong>
                    <p>$295</p>
                  </Box>
                </Column>
              </Row>
              
              <Row>
                <Column md={6}>
                  <div style={{ height: '300px', display: 'flex', justifyContent: "center", alignItems: "center"}}>
                    <Heading align="center">Hi</Heading>
                  </div>
                </Column>
                <Column md={6}>
                  <div style={{ height: '300px', display: 'flex', justifyContent: "center", alignItems: "center"}}>
                    <Heading align="center">Hello</Heading>
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>
        </Box>
      </Column>
    </Row>
  </div>
);

export default Grid;
