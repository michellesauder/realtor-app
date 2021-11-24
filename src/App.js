import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Listings from '../src/Listings/Listings';
import AddListings from '../src/components/AddListings';
import Header from '../src/Header/Header';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <AppWrapper /> },
    { path: "/listings", element: <Listings /> },
    { path: "add-listings", element: <AddListings /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Header/>
      <App />
    </Router>
  );
};

export default AppWrapper;



// import './App.css';
// import Header from '../src/Header/Header';
// import Listings from '../src/Listings/Listings';
// import AddListings from '../src/components/AddListings';
// import React from "react";
// import {
//   Route,
//   Routes
// } from "react-router-dom";

// export default function App() {
//   return (
//     <>
//     <Header /> 
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="listings" element={<Listings />} />
//       <Route path="add-listings" element={<AddListings />} />
//     </Routes>
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <Listings />
//       {/* <AddListings /> */}
//     </div>
//   );
// }

// export default App;
