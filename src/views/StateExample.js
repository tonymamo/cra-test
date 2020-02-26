import React, { Component } from 'react';

import { brandPrimary, brandSecondary } from '../colors';
import Button from '../components/Button';
import Box from '../components/Box';

class StateExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: 0,
      showBox: false,
      names: ['Tony', 'Marmie', 'Michelle'],
    };
  }
  
  countClicks = () => {
    this.setState({
      // update clicks state here
    });
  }
  
  toggleBox = () => {
    this.setState({
      // toggle showBox state here
    });
  }
  
  removeName = (name) => {
    // use this.state and the .filter() method with arrow function here to filter out names
    // that ARE NOT the name that was passed in to this function
    this.setState({
      // update list of names in state here
    });
  }

  render() {
    return (
      <>
        <p>
          <Button type="button" color={brandPrimary} onClick={() => this.countClicks()}>
            Clicked: N times
          </Button>
        </p>
        <p>
          <Button type="button" color={brandSecondary} onClick={() => this.toggleBox()}>
            Toggle Box visibility
          </Button>
        </p>
        
        <Box>This box was toggled by a button click</Box>
        
        {/*
          - map over this.state.names to render however many buttons as there are names in the state
            using "name" as the mapped item value
          - inside the map function's return, add a <p> tag with a key property of "name"
          - inside that <p> tag, add a Button with an onClick that calls the removeName function and
            passes in the "name" parameter
          - for the text of the Button, have it say "Remove name" where name is a dynamic variable
          
        */}
          
        
      </>    
    )
  }
}

export default StateExample;
