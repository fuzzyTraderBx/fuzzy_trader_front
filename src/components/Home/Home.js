import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Invest from '../Invest/Invest';
import './Home.css';
import Table from "react-bootstrap/Table";
import '../Wallet/Wallet.css';
function Home(props) {
  const [page, setPage] = useState(1);
  const [wallet, setWallet] = useState(0);
  const [investments, setInvestments] = useState({});
    useEffect(() => {
        let current_user = localStorage.getItem('current_user');
        axios.get('https://fuzzy-trader-bx.herokuapp.com/investments/' + current_user, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
        .then(function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }else{
              setWallet(response.data.total);
              setInvestments(response.data.investments);
              // console.log(wallet.total);
            }
        })
        .catch(function (error) {
          redirectToLogin()
        });
      }, [page]);
    function redirectToLogin() {
        props.history.push('/login');
    }
    return(
        <div className="mt-2 home_div">
          <div>
            <div>
                <h1>Churulei, seu patrimônio hoje:</h1>
                <h2>{wallet} </h2>
            </div>
            
            <div className="wallet">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Investment</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        Object.keys(investments).map((key, index) => (
                          <tr>
                          <td> {index + 1} </td>
                          <td>{key}</td>
                          <td>${investments[key].price}</td>
                          <td>{investments[key].quantity}</td>
                          </tr>
                          ))
                      }

                                                                
                    </tbody>
                </Table>
                


            </div>
        </div>
          <Invest history={props.history}/>     
        </div>
    )
}

export default withRouter(Home);