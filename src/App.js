import React, {useState} from 'react';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import AlertComponent from './components/AlertComponent/AlertComponent';
import PrivateRoute from './utils/PrivateRoute';
import Home from './components/Home/Home'
import { Redirect } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  const [title, updateTitle] = useState(null);  
  const [errorMessage, updateErrorMessage] = useState(null);

return (
    <Router>
    <div className="App">
    <Header title={title}/>
    {/* <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/> */}
        <div className="container d-flex align-items-center flex-column">
          <Switch>
          <Redirect exact from="/" to="login" updateTitle={updateTitle}/>
            <Route path="/register" exact={true}>
            <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <PrivateRoute path="/home">
              <Home/>
            </PrivateRoute>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
       </div>
   </div>
  </Router>
  )  
}

export default App;
