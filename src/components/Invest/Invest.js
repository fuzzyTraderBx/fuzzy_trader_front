import React, { Component } from 'react';
import './Invest.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


class Invest extends Component{
    render() {

        return(
            <div className='invest'>
            <h1>Quanto você quer investir hoje?</h1>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>

            <Button 
                className='search' 
                variant="info"
                // onClick=
                >Search
                
            </Button>

            </div>
        )
    }    
}

export default Invest;