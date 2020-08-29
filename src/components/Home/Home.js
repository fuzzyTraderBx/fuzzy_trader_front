import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import Wallet from '../Wallet/Wallet';
import Invest from '../Invest/Invest';
import './Home.css';
import Table from "react-bootstrap/Table";
import '../Wallet/Wallet.css';
function Home(props) {
  const [wallet, setWallet] = useState({});
    useEffect(() => {
        let current_user = localStorage.getItem('current_user');
        axios.get('http://127.0.0.1:5000/investments/' + current_user, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
        .then(function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }else{
              setWallet(response.data);
              // console.log(wallet.total);
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
        <div className="mt-2 home_div">
          <div>
            <div>
                <h1>Churulei, seu patrimônio hoje:</h1>
                <h2>{wallet.total} </h2>
            </div>
            
            <div className="wallet">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Investment</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>BTC</td>
                        <td>USD 10000</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>BTC</td>
                        <td>USD 10000</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>BTC</td>
                        <td>USD 10000</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>BTC</td>
                        <td>USD 10000</td>
                        </tr>
                      
                    </tbody>
                </Table>
                


            </div>
        </div>
          <Invest/>     
        </div>
    )
}

export default withRouter(Home);