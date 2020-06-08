import React, { Component } from 'react'
import { Input, Icon, Button, Label, Menu } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import LinkedIn from '../assets/logos/linkedin_logo.png'

class home extends Component {

  render() {

    return (
        <div 
            align='left'
            // style={{paddingLeft : '10%', paddingRight: '10%'}}
        >
            <p>Highly adaptable Masters Computer Science Graduate.</p>
            
            <hr/>
            <h1>Education</h1>
            <p><b>University of Bristol</b> (2016-2020)</p>
            <p>MEng Computer Science 2:1</p>
            <p><b>Sandringham School</b> (2009-2016)</p>
            <p>A levels: A*, A, B in Maths, Further Maths and Computer Science</p>
            <p>A* for extended project on "Can one way functions exist?"</p>

            <hr/>
            <h1>Work Experience</h1>
            <p><b>Full Stack Developer, Yu-Scan Ltd</b> (Summer of 2019)</p>
            <p>Developed a physical and mental health focused social media app at Yu-Scan ltd in Bristol. <br/>
            Self-taught React Native to implement front-end of app, used Node and React for backend server <br/>
            and configured database on MongoDB Atlas. Experienced Agile Methodologies.</p>

            <p><b>Digital and Technology Journalist, UX Connections​</b> (2019)</p>
            <p>Researched and wrote articles relevant to the topic of technology and science. <br/>
            See the articles <Link to="/articles">here</Link>.</p>

            <p><b>Teaching Assistant, University of Bristol</b> (2019)</p>
            <p> Character and Set Design Unit:​ Led help sessions for students creating 3D character models <br/>
            in Autodesk Maya 2019.</p>

            <p><b>Secretary, UoB Computer Science Society</b> (2018-2019)</p>
            <p> As an elected representative of the largest society in the University I organised industry <br/>
            sponsored society events, such as: the Boeing 24 hr Hackathon, as well as recorded, consolidated <br/>
            and actively contributed to minutes for all meetings.</p>

            <hr/>

            {/* <br/>
            <p>
            As well as self study, I am attending Japanese language classes through the UoB Japanese society. <br/>
            Keen traveller, last Summer visiting Bulgaria and learning a little of the language. <br/>
            Competed in multiple years of BEEES (Bristol Electrical and Electronic Society) Robot Wars. <br/> 
            During my tenure as Secretary of the UoB Computer Science Society, I held positions as captain for <br/>
            both our intramural Basketball and Badminton teams. More recently I have been trying my hand at <br/>
            Brazilian jiu-jitsu.
            </p> */}

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

export default home