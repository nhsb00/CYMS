import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';


import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Footer from './footer/footer';
import Splash from './splash/splash';


const App = () => (
  <div>
   
    
    <Switch>
      <AuthRoute exact path="/" component={ Splash } />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    
  
  </div>
);

export default App;