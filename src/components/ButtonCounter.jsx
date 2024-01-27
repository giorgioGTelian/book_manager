import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ButtonCounter = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <Button onClick={handleButtonClick}>Click me</Button>
            <p>Conteggio: {count}</p>
        </div>
    );
};

export default ButtonCounter;
