import React, {useState} from 'react';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import AlertComponent from './components/AlertComponent/AlertComponent';
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
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/register" exact={true}>
            <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
       </div>
   </div>
  </Router>
  )  
}

export default App;
