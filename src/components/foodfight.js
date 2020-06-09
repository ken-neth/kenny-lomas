import React, { Component } from 'react'
import { Modal, Image } from 'semantic-ui-react'


import "video-react/dist/video-react.css";
import { Player } from 'video-react';

import Video from '../assets/video-1558111780.mp4'

import Cover from '../assets/foodfight/cover.png'
import Food from '../assets/foodfight/food.png'
import Game from '../assets/foodfight/game.png'
import Overview from '../assets/foodfight/overview.png'
import Sketches from '../assets/foodfight/sketches.png'
import Contact from './contact';

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
            <h1>Food Fight</h1>

            <h3>Food Fight is a team based competitive cooking game running on the Unity Engine and <br/>
            that uses Android mobile phones, NFC tags, Wii remotes and sensors.</h3>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Player
            playsInline
            fluid={false} width={this.state.width/2}
            // poster="/assets/poster.png"
            src={Video}
            />
            </div>

            <h3>The two kitchens rush to complete orders that appear on the main screen. <br/>
              The players can serve the orders to hungry customers for star points ...
            </h3>

            <Modal trigger={<img src={Game} style={{align: 'center', width: this.state.width/2}}></img>} closeIcon>
                <Image src={Game}/>
            </Modal>

            <h3> ... or they can opt to throw the food at the opposing kitchen! <br/> 
            This is done on a separate screen using Wii remotes.</h3>

            <Modal trigger={<img src={Cover} style={{align: 'center', width: this.state.width/2}}></img>} closeIcon>
                <Image src={Cover}/>
            </Modal>

            <h3> One desktop computer acts as a server that manages the game. </h3>
            <h3> Android phones are used to scan NFC tags to enter a cooking station, i.e. cupboard, chopping, frying, and plating, <br/>
            then complete the task by picking AR ingredients in the cupboard, shaking the phone to chop, and flipping the phone to fry. </h3>

            <Modal trigger={<img src={Overview} style={{align: 'center', width: this.state.width/2}}></img>} closeIcon>
                <Image src={Overview}/>
            </Modal>

            <h3> Additionally, an LED script running on a Raspberry Pi indicates which stations have been temporarily decommissioned by <br/>
            the opposing kitchen.</h3>

            <h3>Here are the first sketches for the 3D modelled ingredients prefabs to be put in the game. </h3>
            
            <Modal trigger={<img src={Sketches} style={{align: 'center', width: this.state.width/2}}></img>} closeIcon>
                <Image src={Sketches}/>
            </Modal>

            <h3>And here are a couple of final ingredient prefabs included in the game, i.e. noodles and paella. </h3>
            
            <Modal trigger={<img src={Food} style={{align: 'center', width: this.state.width/2}}></img>} closeIcon>
                <Image src={Food}/>
            </Modal>
            
            <Contact/>
        </div>
    )
  }
}

export default Foodfight