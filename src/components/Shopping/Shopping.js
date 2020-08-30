import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Shopping.css';
import Table from "react-bootstrap/Table";
function Shopping(props) {

    const [page, setPage] = useState(1);
    const [investments, setInvestments] = useState([]);

    const redirectToHome = () => {
        props.history.push('/home');
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/list_investments/' + props.match.params.max_price, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
        .then(function (response) {
            if(response.status !== 200){
            //   redirectToLogin()
            }else{
                console.log(response.data);
                setInvestments(response.data);
                
        
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [page]);

    const buy = (e) => {
        console.log("COMPRANDO " + e);
        const payload={
            "investment_key":e,
        }

        const current_user = localStorage.getItem('current_user')

        axios.post('http://127.0.0.1:5000/investments/' + current_user, payload, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
            .then(function (response) {
                if(response.status === 200){
                    redirectToHome();
                    props.showError(null)
                }
                else if(response.status === 204){
                    props.showError("Failed to buy.");
                }
                else{
                    props.showError("failed to buy");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div className="mt-2 shopping_div">
         <h1> LISTA DE COISA DISPONIVEL {props.match.params.max_price} </h1> 
         <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Type</th>
                        <th>Investment</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        investments.map(item => {
                         return(   
                          <tr>
                          <td> {item.is_criptocurrency ? <p>cripto</p> : <p>stock</p>} </td>   
                          <td> {item.name} </td>
                          <td>{item.value}</td>
                          <td><button 
                            type="button" 
                            class="btn btn-info"
                            onClick={() => buy(item.name)}
                            >Buy</button></td>

                          </tr>
                        )})
                      }

                                                                
                    </tbody>
                </Table>
          
        </div>
    )
}

export default withRouter(Shopping);