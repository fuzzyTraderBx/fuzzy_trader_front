import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import './Wallet.css';


class Wallet extends Component{
    render() {

        return(
            <div>
            <div>
                <h1>Churulei, seu patrimônio hoje:</h1>
                <h2>$ 500.00</h2>
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
                    </tbody>
                </Table>
                


            </div>
        </div>
        )
    }    
}

export default Wallet;