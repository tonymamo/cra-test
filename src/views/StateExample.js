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
      names: this.props.people,
    };
  }
  
  countClicks = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  }
  
  toggleBox = () => {
    this.setState({
      showBox: !this.state.showBox,
    });
  }
  
  removeName = (name) => {
    this.setState({
      names: this.state.names.filter((n) => n !== name),
    });
  }

  render() {
    return (
      <>
        <p>
          <Button type="button" color={brandPrimary} onClick={() => this.countClicks()}>
            Clicked: {this.state.clicks} times
          </Button>
        </p>
        {this.props.people[0]} {this.props.people[1]} {this.props.people[2]}
        <br />
        {this.state.names[0]} {this.state.names[1]} {this.state.names[2]}
        <p>
          <Button type="button" color={brandSecondary} onClick={() => this.toggleBox()}>
            Toggle Box visibility
          </Button>
        </p>
        
        { this.state.showBox && (<Box>This box was toggled by a button click</Box>)}

        {
          this.state.names.map((name) => (
            <p key={name}>
              <Button type="button" onClick={() => this.removeName(name)}>{name}</Button>
            </p>
          ))
        }
          
        
      </>    
    )
  }
}

export default StateExample;
