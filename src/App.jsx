import './App.css';
// import Header from '../src/Header/Header';
import Listings from './Listings/Listings';
import AddListings from './AddListings/AddListings';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  // Routes,
  // Link,
  Switch
} from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Drawer from './components/Drawer.jsx';
import * as React from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Messaging from './Messaging/Messaging';
import MortgageCalculator from './MortgageCalculator/MortgageCalculator';

function App () {
  const [state, setState] = React.useState({
    anchor: false
  });

  
  // const link = (path) => {
  //   if(path){
  //     switch(path) {
  //       case 'Listings':
  //         return '/listings'
  //       case 'Messaging':
  //         return '/messages'
  //       case 'Starred Listings':
  //         return '/starred-listings'
  //       case 'Add Listings':
  //         return '/add-listings';
  //       default:
  //         return '/';
  //     }
  //   }
  // }

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
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/messaging" component={Messaging}></Route>
        <Route path="/mortgage-calculator" component={MortgageCalculator}></Route>
        {/* <Route path="/profile" component={Profile}></Route> */}
        {/* <Route path="/account" component={Account}></Route> */}
        {/* <Route path="/lawyer-portal" component={Lawyer-Portal}></Route> */}
      </Switch>
    </Router>
  </>)
}

export default App;
