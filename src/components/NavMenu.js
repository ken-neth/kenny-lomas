import React, { Component } from 'react'
import { Input, Label, Menu, Dropdown } from 'semantic-ui-react'

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
    // console.log(window.innerWidth);
    // 1100
  }

  render() {

    return (
        <Router>
        <div style={{paddingLeft : '15%', paddingRight: '15%'}}>
        <Menu>
          <Menu.Item as={Link} to='/' name='home'/>

        {this.state.width <=1100 &&
          <Dropdown item text='Projects'>
          <Dropdown.Menu>
            <Dropdown.Item text='Thesis Project' as={Link} to='/uni-projects/opinion-dynamics'/>
            {/* <Dropdown.Item text='Flood Warning' as={Link} to='/uni-projects/flood-warning'/> */}
            <Dropdown.Item text='Games Project' as={Link} to='/uni-projects/food-fight'/>
            <Dropdown.Item text='Maya modelling' as={Link} to='/uni-projects/maya-modelling'/>

            <Dropdown.Item text='Publications' as={Link} to='/publications'/>
          </Dropdown.Menu>
        </Dropdown> }
        {this.state.width > 1100 && <Menu.Item as={Link} to='/uni-projects/opinion-dynamics' name='Thesis Project'/>}
        {this.state.width > 1100 && <Menu.Item as={Link} to='/uni-projects/machine-learning' name='Machine Learning Projects'/>}
        {/* {this.state.width > 1100 && <Menu.Item as={Link} to='/uni-projects/flood-warning' name='Flood Warning'/>} */}
        {this.state.width > 1100 && <Menu.Item as={Link} to='/uni-projects/food-fight' name='Games Project'/>}
        {this.state.width > 1100 && <Menu.Item as={Link} to='/uni-projects/maya-modelling' name='Maya modelling'/>}
        {this.state.width > 1100 && <Menu.Item as={Link} to='/publications' name='Publications'/>}
        
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
