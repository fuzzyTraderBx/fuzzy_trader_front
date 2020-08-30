import React, { useState } from 'react';
import './Invest.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


function Invest(props){
    const [state , setState] = useState(0);

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(value)
    }

    const search = (e) => {
        props.history.push('/search/' + state);
    }

    return(
        <div>
        <div className='invest'>
            <h3>Quanto você quer investir hoje?</h3>
        </div>
        <div className='search_div'>
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
            </div>
    )
} 


export default Invest;