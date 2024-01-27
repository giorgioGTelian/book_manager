import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function JumbotronComponent({ title, onClick, description, imageCard }) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <CardGroup className="form-wrapper">
                        <Card className="d-flex justify-content-center align-items-center" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={imageCard} style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                {description}
                                </Card.Text>
                                <Button variant="primary" onClick={onClick}>vai a vedere</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default JumbotronComponent;
