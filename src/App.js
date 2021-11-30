import './App.css';
// import Header from '../src/Header/Header';
import Listings from '../src/Listings/Listings';
import AddListings from '../src/components/AddListings';
import Home from '../src/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  // Routes,
  // Link,
  Switch
} from "react-router-dom";
// import LeftDrawer from '../src/components/Drawer.js';
import Navbar from '../src/components/Navbar.jsx';
import Drawer from '../src/components/Drawer.js';
import * as React from 'react';

function App () {
  const [state, setState] = React.useState({
    anchor: false
  });

  const toggleDrawer = (open) => (event) => {
    setState({ ...state, anchor:open });
  };

  return (<>
    <Router>
      <Drawer toggleDrawer={toggleDrawer} anchor={state.anchor} />
      <Navbar toggleDrawer={toggleDrawer} anchor={state.anchor}/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/listings" component={Listings}></Route>
        <Route path="/add-listings" component={AddListings}></Route>
        {/* <Route path="/messages" component={Messages}></Route> */}
        {/* <Route path="/profile" component={Profile}></Route> */}
        {/* <Route path="/account" component={Account}></Route> */}
        {/* <Route path="/lawyer-portal" component={Lawyer-Portal}></Route> */}
      </Switch>
    </Router>
  </>)
}

export default App;
