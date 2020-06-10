import React from 'react';

import './App.css';

// import semantic ui components and css style
import { Icon, Segment} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

// import navigation menu
// import NavMenu from './components/NavigationMenu/navigationContainer'
import NavMenu from './components/NavMenu'

import FirebaseLogo from './assets/logos/firebase.png'
import Logo from './logo.svg'

function App() {
  return (
    <div className="App" style={{paddingTop: '2%'}}>
      <h1>
        {/* <img class="ui mini spaced image" src={Logo}/> */}
        Kenny Lomas 
        {/* <img class="ui mini spaced image" src={FirebaseLogo}/> */}
      </h1>
      <Segment> 
        A homemade React web app hosted on Google Firebase 
      </Segment>
      <NavMenu/>
    </div>
  );
}


export default App;
