 
import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
function Header(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    if(props.location.pathname === '/home') {
        title = 'Fuzzy Trader BX'
    }
    function renderLogout() {
        if(props.location.pathname === '/home'){
            return(
                <div className="ml-auto">
                    <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }
    }
    function handleLogout() {
        axios.post('http://127.0.0.1:5000/logout', {}, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
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
    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
                <span className="h3">{props.title || title}</span>
                {renderLogout()}
            </div>
        </nav>
    )
}
export default withRouter(Header);