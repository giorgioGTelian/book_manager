import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function JumbotronComponent({ title, onClick, description, imageCard }) {
    return (
        <CardGroup>
            <Card className="d-flex justify-content-center align-items-center" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageCard} style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Button variant="primary"onClick={onClick}>vai a vedere</Button>
            </Card.Body>
        </Card>
    </CardGroup>
    );
}

export default JumbotronComponent;