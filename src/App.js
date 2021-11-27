import './App.css';
import Header from '../src/Header/Header';
import Listings from '../src/Listings/Listings';
import AddListings from '../src/components/AddListings';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from "react-router-dom";
import LeftDrawer from '../src/components/Drawer.js';
import Navbar from '../src/components/Navbar.jsx';
import Drawer from '../src/components/Drawer.js';
import * as React from 'react';

function App () {
  const [state, setState] = React.useState({
    left: false,
    anchor: false
  });

  const toggleDrawer = (open) => (event) => {
    setState({ ...state, anchor:open });
  };

  return (<>
    <Router>
      <Drawer toggleDrawer={toggleDrawer} anchor={state.anchor}/>
      <Navbar toggleDrawer={toggleDrawer} anchor={state.anchor}/>
      <div>
        <div>
          <Switch>
            <Route exact path="/">
              <Listings/>
            </Route>
            <Route path="/listings">
            </Route>
            <Route path="/add-listings">
              <AddListings />
            </Route>

            {/* wip */}
            <Route  path="/messages">
              {/* <messages/> */}
            </Route>
            <Route path="/Profile">
              {/* profile */}
            </Route>
            <Route path="/contact">
              {/* <contact /> */}
            </Route>
          </Switch>
        {/* < /> */}
        </div>
    </div>
    </Router>

  </>)
}

// function App() {
//   return (
//     <div>
//       {/* <Header /> */}
//       <Listings />
//       {/* <AddListings /> */}
//     </div>
//   );
// }

export default App;
