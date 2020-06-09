import React, { Component } from 'react'
import { Icon, Button, Modal, Image, Header, Card} from 'semantic-ui-react'

import Contact from './contact'

class UnitModal extends Component {

  render() {

    return (
        <div 
            // align='left'
            // style={{paddingLeft : '10%', paddingRight: '10%'}}
        >

            {/* 2019 COMSM0018 Applied Deep Learning */}

            <Modal trigger={
                <Card fluid header={this.props.title} meta={this.props.date} />  
                }
                closeIcon
            >
                <Modal.Header>{this.props.title}</Modal.Header>
                <Modal.Content image>
                
                <Modal.Description>
                    <div>
                        <Header>Modal Header</Header>
                        <p>
                        This is an example of expanded content that will cause the modal's
                        dimmer to scroll
                        </p>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </div>
                </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                <Button primary>
                    Proceed <Icon name='right chevron' />
                </Button>
                </Modal.Actions>
            </Modal>

            {/* 2019 COMS30007 Machine Learning */}

            {/* 2018 COMS30121 Image, Processing and Computer Vision */}

            {/* 2018 COMS21202 Symbols, Patterns, and Signals */}
        </div>
    )
  }
}

export default UnitModal