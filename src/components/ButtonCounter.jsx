import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ButtonCounter = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate(); // renamed for clarity

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    const handleBackClick = () => {
        navigate(-1); // go back to the previous page
    };

    return (
        <div>
            <Button onClick={handleButtonClick}>Click me</Button>
            <p>Conteggio: {count}</p>
            <Button variant="secondary" onClick={handleBackClick}>Torna indietro</Button>
        </div>
    );
};

export default ButtonCounter;
