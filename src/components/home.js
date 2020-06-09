import React, { Component } from 'react'
import { Input, Icon, Button, Label, Menu } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import Contact from './contact'

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

            <Contact/>
        </div>
    )
  }
}

export default home