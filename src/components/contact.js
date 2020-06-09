import React, { Component } from 'react'
import { Icon, Button} from 'semantic-ui-react'


class Contact extends Component {

  render() {

    return (
        <div 
            align='left'
            // style={{paddingLeft : '10%', paddingRight: '10%'}}
        >
            <hr/>

            <a href="http://www.linkedin.com/in/kenneth-lomas-243a18138" target="_blank">
            <Button color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
            </Button>
            </a>
            <a href="https://github.com/ken-neth" target="_blank">
            <  Button color='github'>
                <Icon name='github' /> GitHub
            </Button>
            </a>
        </div>
    )
  }
}

export default Contact