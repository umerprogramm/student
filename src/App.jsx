import React, { useState } from 'react';
import { Signup } from './signup';
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from './Dashboard';
import Login from './Login';
import Forget from './Forget';
import Main1 from './Main1';
import Add_product from './add_product';
import Detail from './Detail';

function App() {


  return (
    <Router>
      <Switch>
       <Route exact  path="/" component={Signup}/>
       <Route path='/login' component={Login}/>
       <Route  path="/dashboard" component={Dashboard}/>
       <Route  path="/main" component={Main1}/>
       <Route  path="/addproduct" component={Add_product}/>
       <Route  path="/:title" component={Detail}/>
       <Route  path="/forget" component={Forget}/>

      </Switch>
    </Router>
  );
}

export default App;
