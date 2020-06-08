import React, { Component } from 'react'
import { Input, Label, Menu, Modal, Image, Icon} from 'semantic-ui-react'

import { withRouter } from 'react-router-dom'

import finalrender from '../assets/renders/finalrender.jpeg'

import AOpass from '../assets/renders/AmbientOcclusionpass.jpeg'
import barwindows from '../assets/renders/barwindowsmodel.jpeg'
import boothmodel from '../assets/renders/boothmodel.jpeg'

import Video1 from '../assets/renders/full_animation.mp4'
import Video2 from '../assets/renders/sidebyside.mp4'

import "video-react/dist/video-react.css";
import { Player } from 'video-react';


class Modelling extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          width: 0, 
          height: 0
        };
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
        <div style={{paddingLeft : '10%', paddingRight: '10%'}}>
            
            <h1>Dancing robot animation</h1>

            <p>Coursework for 2019 COMSM0013 Animation Production unit.</p>
            <p>The brief was to create a short film for a new toy that assembles from 
            small modular components, then comes to life through dance.</p>
            {/* <video src={Video} autoPlay="true"/> */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Player
            playsInline
            fluid={false} width={this.state.width/1.5}
            // poster="/assets/poster.png"
            src={Video1}
            />
            </div>

            <br/>
            <p>And here's a side by side of the final dance animation against 
            an animatic (timed slideshow of storyboard images).
            </p>
            <br/>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Player
            playsInline
            fluid={false} width={this.state.width/1.5}
            // poster="/assets/poster.png"
            src={Video2}
            />
            </div>
            <br/>
            <br/>
            
            <h1>Bar render</h1>
            <p>Coursework for 2018 COMSM31000 Character and Set Design unit.</p>
            <Modal trigger={<img src={finalrender} style={{align: 'center', width: this.state.width/2}}></img>} closeIcon closeOnDimmerClick={false}>
                <Image src={finalrender}/>
            </Modal>
            
            <h1>Ambient Occlusion Pass</h1>
            <Modal trigger={<img src={AOpass} style={{align: 'center', width: this.state.width/2}}></img>} closeIcon closeOnDimmerClick={false}>
                <Image src={AOpass}/>
            </Modal>
            <Modal trigger={<img src={barwindows} style={{align: 'center', width: this.state.width/2}}></img>} closeIcon closeOnDimmerClick={false}>
                <Image src={barwindows}/>
            </Modal>
            <Modal trigger={<img src={boothmodel} style={{align: 'center', width: this.state.width/2}}></img>} closeIcon closeOnDimmerClick={false}>
                <Image src={boothmodel}/>
            </Modal>
            
            
            
        </div>
    )
  }
}

export default Modelling