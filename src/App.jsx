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

  const toggleDrawer = (open) => (event) => {
    setState({ ...state, anchor:open });
  };

  // Q8.	Write a function that takes a string as an input and returns a data 
  // structure that indicates the number of occurrences of every word in the input string. 
  // Letter case (upper/lower) must be ignored when counting words.


let x = 1 > 0

// let y = x.sort()



  return (<>

  {console.log(x)}


  {/* <div class="container">
    <div class="col1">
      fjkdlsjfds

    </div>
    <div class='col2'>
      fjkdsljfs

    </div>
    <div class='col3'>
      fnjdsfhjs

    </div>
  </div> */}

  </>)
}

export default App;
