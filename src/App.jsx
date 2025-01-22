import React, { useState } from 'react';
import { Signup } from './signup';
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {


  return (
    <Router>
      <Switch>
       <Route exact  path="/" component={Signup}/>
       <Route path='/login' component={Login}/>
       <Route  path="/dashboard" component={Dashboard}/>

      </Switch>
    </Router>
  );
}

export default App;
