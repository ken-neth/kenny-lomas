import React, { Component } from 'react'
import { Icon, Button, Modal, Image, Header, Card} from 'semantic-ui-react'

import Contact from './contact'
import UnitModal from './unitmodal'

class MachineLearning extends Component {

  render() {

    return (
        <div 
            // align='left'
            // style={{paddingLeft : '10%', paddingRight: '10%'}}
        >
            <h1>Machine Learning Projects </h1>
            <div style={{paddingLeft : '10%', paddingRight: '10%'}}>
            {/* 2019 COMSM0018 Applied Deep Learning */}

            <UnitModal title='COMSM0018 Applied Deep Learning' date='2019'/>

            {/* 2019 COMS30007 Machine Learning */}

            <UnitModal title='COMS30007 Machine Learning' date='2019'/>

            {/* 2018 COMS30121 Image, Processing and Computer Vision */}
            <UnitModal title='COMS30121 Image, Processing and Computer Vision' date='2018'/>

            {/* 2018 COMS21202 Symbols, Patterns, and Signals */}
            <UnitModal title='COMS21202 Symbols, Patterns, and Signals' date='2018'/>
            </div>
            <br/>
            <Contact/>
        </div>
    )
  }
}

export default MachineLearning