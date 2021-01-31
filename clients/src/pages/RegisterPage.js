import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm';
import { Container, Row, Col } from 'react-bootstrap';

class RegisterPage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <h2 className="text-center">Register</h2>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <RegisterForm />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default RegisterPage;