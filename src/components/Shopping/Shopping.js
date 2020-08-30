import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Shopping.css';
function Shopping(props) {

    const [page, setPage] = useState(1);
    const [investments, setInvestments] = useState({});

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/list_investments/' + props.match.params.max_price, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
        .then(function (response) {
            if(response.status !== 200){
            //   redirectToLogin()
            }else{
                console.log(response.data);
                
        
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [page]);
    console.log(props)
    return(
        <div className="mt-2 shopping_div">
         <h1> LISTA DE COISA DISPONIVEL {props.match.params.max_price} </h1>   
        </div>
    )
}

export default withRouter(Shopping);