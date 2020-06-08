import React, { Component } from 'react'
import { Input, Label, Grid, Image, Menu } from 'semantic-ui-react'

import { withRouter } from 'react-router-dom'

import HuaweiPoster from '../assets/logos/huawei_poster.jpg'
import Samsung from '../assets/logos/samsung.jpg'
import Britbox from '../assets/logos/britbox.jpg'
import StadiaConf from '../assets/logos/stadia_conference.jpg'
import DeepMind from '../assets/logos/deep-mind.jpg'

class Publications extends Component {

  render() {

    return (
        <div 
          align='center'
        >
            <h1>Publications I've written.</h1>
            <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <a href="https://www.uxconnections.com/samsung-unveils-galaxy-fold-and-galaxy-s10/" target="_blank">
                  <Image src={Samsung} />
                  <h2>[26.02.19] Samsung unveils Galaxy Fold and Galaxy S10</h2>
                </a>
              </Grid.Column>

              <Grid.Column>
                <a href="https://www.uxconnections.com/huawei/" target="_blank">
                  <Image src={HuaweiPoster} />
                  <h2>[28.02.19] Huawei pledges $2bn overhaul to ease concerns of UK government</h2>
                </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <a href="https://www.uxconnections.com/britbox/" target="_blank">
                  <Image src={Britbox} />
                  <h2>[12.03.19] Britbox</h2>
                </a>
              </Grid.Column>

              <Grid.Column>
                <a href="https://www.uxconnections.com/the-netflix-of-gaming/" target="_blank">
                  <Image src={StadiaConf} />
                  <h2>[29.03.19] The Netflix of Gaming</h2>
                </a>
              </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <a href="https://www.uxconnections.com/deepminds-eye-diagnosis-ai/" target="_blank">
                    <Image src={DeepMind} />
                    <h2>[10.05.19] DeepMind’s Eye Diagnosis AI</h2>
                  </a>
                </Grid.Column>
                <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

export default Publications