import React, {useState} from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";


function RegistrationForm(props) {

    const [state , setState] = useState({
        email : "",
        password : ""
    })
    const onChanged = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const onSubmitClick = (e) => {
        e.preventDefault();
        console.log(state.password + '------' + state.confirmPassword)
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    }

    const redirectToLogin = () => {
        props.updateTitle('Login');
        props.history.push('/login'); 
    }

    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            props.showError(null);
            const payload={
                "name":'leticia',
                "email":state.email,
                "password":state.password,
            }
            var config = { headers: {  
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'}
       }
            axios.post('http://127.0.0.1:5000/signup', payload, config)
                .then(function (response) {
                    if(response.status === 200){
                        console.log(response);
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to login.'
                        }))
                        redirectToLogin();
                        props.showError(null)
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }
        
    }


  return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       onChange={onChanged}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        onChange={onChanged}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        onChange={onChanged}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={onSubmitClick}
                    > Register
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegistrationForm);