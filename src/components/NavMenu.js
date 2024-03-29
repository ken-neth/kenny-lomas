import React, { Component } from 'react'
import { Icon, Menu, Dropdown } from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} 
  from 'react-router-dom'

import Home from './home'
import OD from './OD'
import MachineLearning from './machinelearning'
// import Flood from './floodwarning'
import Foodfight from './foodfight'
import Modelling from './modelling'
import Publications from './publications'

class NavMenu extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, activeItem: '' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    // console.log(window.innerWidth);
    // 1100
  }

  render() {

    const { activeItem } = this.state

    return (
        <Router>
        <div style={{paddingLeft : '15%', paddingRight: '15%'}}>
        <Menu compact pointing secondary icon='labeled'>
          <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
            <Icon name='home'/>
            Home
          </Menu.Item>

        {this.state.width <=1100 &&
          <Dropdown item text='Projects'>
          <Dropdown.Menu>
            <Dropdown.Item text='Thesis Project' as={Link} to='/uni-projects/opinion-dynamics' onClick={this.handleItemClick}/>
            <Dropdown.Item text='Machine Learning Projects' as={Link} to='/uni-projects/machine-learning/' onClick={this.handleItemClick}/>
            {/* <Dropdown.Item text='Flood Warning' as={Link} to='/uni-projects/flood-warning'/> */}
            <Dropdown.Item text='Games Project' as={Link} to='/uni-projects/food-fight' onClick={this.handleItemClick}/>
            <Dropdown.Item text='Maya modelling' as={Link} to='/uni-projects/maya-modelling' onClick={this.handleItemClick}/>

            <Dropdown.Item text='Publications' as={Link} to='/publications'/>
          </Dropdown.Menu>
        </Dropdown> }
        {this.state.width > 1100 && <Menu.Item as={Link} to='/uni-projects/opinion-dynamics' name='Thesis Project' 
          active={activeItem === 'Thesis Project'} onClick={this.handleItemClick}>
            <Icon name='student'/>
            Thesis Project
        </Menu.Item>}
        {this.state.width > 1100 && <Menu.Item as={Link} to='/uni-projects/machine-learning' name='Machine Learning Projects'
        active={activeItem === 'Machine Learning Projects'} onClick={this.handleItemClick}>
            <Icon name='eye'/>
            Machine Learning Projects
        </Menu.Item>}
        {/* {this.state.width > 1100 && <Menu.Item as={Link} to='/uni-projects/flood-warning' name='Flood Warning'/>} */}
        {this.state.width > 1100 && <Menu.Item as={Link} to='/uni-projects/food-fight' name='Games Project'
        active={activeItem === 'Games Project'} onClick={this.handleItemClick}>
            <Icon name='food'/>
            Games Project
        </Menu.Item>}
        {this.state.width > 1100 && <Menu.Item as={Link} to='/uni-projects/maya-modelling' name='Maya modelling'
        active={activeItem === 'Maya modelling'} onClick={this.handleItemClick}>
            <Icon name='paint brush'/>
            Maya modelling
        </Menu.Item>}
        {this.state.width > 1100 && <Menu.Item as={Link} to='/publications' name='Publications'
        active={activeItem === 'Publications'} onClick={this.handleItemClick}>
            <Icon name='bullhorn'/>
            Publications
        </Menu.Item>}
        
      </Menu>
      <Switch>
            <Route path="/uni-projects/opinion-dynamics">
              <OD/>
            </Route>
            {/* <Route path="/uni-projects/flood-warning">
              <Flood />
            </Route> */}
            <Route path="/uni-projects/machine-learning">
              <MachineLearning/>
            </Route>
            <Route path="/uni-projects/food-fight">
              <Foodfight />
            </Route>
            <Route path="/uni-projects/maya-modelling">
              <Modelling />
            </Route>
            <Route path="/publications">
              <Publications />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>
      </Router>
    )
  }
}

export default NavMenu
