import React, { Component } from 'react'

import Contact from './contact'

class ODthesis extends Component {

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
        <div
        style={{paddingTop: '2%'}}>
            <h1>Exploring Narrative Economics (2020)</h1>
            <h2>A Novel Simulation Platform that Integrates Automated Traders with Opinion Dynamics</h2>
            
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
              <iframe width={this.state.width/2} height='500'
                      src="https://www.youtube.com/embed/djFLtQDZo8Q">
              </iframe>
            </div>

            <Contact/>
        </div>
    )
  }
}

export default ODthesis