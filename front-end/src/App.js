import React from 'react';
import './App.css';
import SuperTickler from './Components/SuperTickler';
import Login from './Components/authComponents/Login.js';
import Signup from './Components/authComponents/Signup.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

function App() {
  
  return (
    // <div>
    //   <SuperTickler />
    // </div>
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/signup" component={Signup} /> */}
      <PrivateRoute exact path="/supertickler" component={SuperTickler} />
    </Router>
  );
};

export default App;