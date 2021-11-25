import './App.css';
import Header from '../src/Header/Header';
import Listings from '../src/Listings/Listings';
import AddListings from '../src/components/AddListings';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from "react-router-dom";
import Drawer from '../src/components/Drawer.js';



function App () {
  return (<>
    <Router>
      <Drawer />
      <div>
        {/* <Header /> */}
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
