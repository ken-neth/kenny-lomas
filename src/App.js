import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

// import router components for navigation
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

// import semantic ui components and css style
import { Button, Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

// import navigation menu
// import NavMenu from './components/NavigationMenu/navigationContainer'
import NavMenu from './components/NavMenu'

// import Home page
import Home from './components/home'

function App() {
  return (
    <div className="App" style={{marginTop: '2%'}}>
      <h1>Kenny Lomas</h1>
      <NavMenu/>
    </div>
  );
}


export default App;
