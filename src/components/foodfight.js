import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'

import { withRouter } from 'react-router-dom'

import "video-react/dist/video-react.css";
import { Player } from 'video-react';

import Video from '../assets/video-1558111780.mp4'

class Foodfight extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {

    return (
        <div>
            <h1>foodfight</h1>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Player
            playsInline
            fluid={false} width={this.state.width/1.5}
            // poster="/assets/poster.png"
            src={Video}
            />
            </div>
        </div>
    )
  }
}

export default Foodfight