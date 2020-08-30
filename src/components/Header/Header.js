import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import './Header.css'
function Header(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    if(props.location.pathname === '/home' || '/search/:max_price') {
        title = 'Fuzzy Trader bx'
    }
    function renderLogout() {
        if(props.location.pathname === '/home'|| '/search/:max_price'){
            return(
                <div className="ml-auto">
                    <button className="btn" onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }
    }
    function handleLogout() {
        axios.post('https://fuzzy-trader-bx.herokuapp.com/logout', {}, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
            .then(function (response) {
                if(response.status === 200){
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('current_user')
                    props.history.push('/login')
                    props.showError(null)
                }
                else{
                    props.showError("Some error occurred :( ");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const redirectToHome = () => {
        // props.updateTitle('Home')
        props.history.push('/home');
    }
    return(
        <nav className="navbar navbar-custom">
            <div className="row col-12 d-flex justify-content-center text-white">
                <span className="h3" onClick={redirectToHome}>{props.title || title}</span>
                {renderLogout()}
            </div>
        </nav>
    )
}
export default withRouter(Header);