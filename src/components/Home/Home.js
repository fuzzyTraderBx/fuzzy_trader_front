import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
function Home(props) {
    useEffect(() => {
        let current_user = localStorage.getItem('current_user');
        axios.get('http://127.0.0.1:5000/investments/' + current_user, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
        .then(function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }
        })
        .catch(function (error) {
          redirectToLogin()
        });
      })
    function redirectToLogin() {
        props.history.push('/login');
    }
    return(
        <div className="mt-2">
            Home page content
        </div>
    )
}

export default withRouter(Home);