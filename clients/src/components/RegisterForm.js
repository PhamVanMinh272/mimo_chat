import React, { Component } from 'react';
import { Form, Col, Row , Button} from 'react-bootstrap';

class RegisterForm extends Component {
    render() {
        return (
            <Form>
                <Form.Group as={Row} controlId="fullName">
                    <Form.Label column sm="3">
                    Full Name
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="text" placeholder="Full Name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="phone">
                    <Form.Label column sm="3">
                    Phone
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="text" placeholder="Phone" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="userName">
                    <Form.Label column sm="3">
                    User Name
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="text" placeholder="User Name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="password">
                    <Form.Label column sm="3">
                    Password
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="confirmPassword">
                    <Form.Label column sm="3">
                    Confirm Password
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="password" placeholder="Confirm Password" />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        )
    }
}