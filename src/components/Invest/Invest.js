import React, { useState } from 'react';
import './Invest.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import axios from 'axios'


function Invest(props){
    const [state , setState] = useState(0);

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(value)
    }

    const search = (e) => {
        props.history.push('/search/' + state);
    }
    function redirectToLogin() {
        props.history.push('/login');
    }

    return(
        <div className='invest'>
        <h1>Quanto você quer investir hoje?</h1>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Amount (to the nearest dollar)" value={state} onChange={handleChange} />
            <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>

        <Button 
            className='search' 
            variant="info"
            onClick={search}
            >Search
            
        </Button>

        </div>
    )
} 


export default Invest;