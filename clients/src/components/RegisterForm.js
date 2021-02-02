import React, { Component } from 'react';
import { Form, Col, Row , Button} from 'react-bootstrap';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            phone: '',
            username: '',
            password: '',
            confirmPassword: '',
            isLoaded: false
        };
    }

    register(e) {
        console.log('hahsh');
        e.preventDefault();
        console.log(e.target);
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                full_name: this.state.fullName,
                phone: this.state.phone,
                username: this.state.username,
                password: this.state.password,
                confirm_password: this.state.confirmPassword
            })
        }
        fetch("http://0.0.0.0:5000/register", options)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                });
            },
            (error) => {
                this.setState({
                    isLoaded: false,
                })
            }
        )
    }

    render() {
        return (
            <Form>
                <Form.Group as={Row} controlId="fullName">
                    <Form.Label column sm="3">
                    Full Name
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control 
                        type="text" 
                        placeholder="Full Name" 
                        value={this.state.fullName} 
                        onChange={(e) => this.setState({fullName: e.target.value})}
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="phone">
                    <Form.Label column sm="3">
                    Phone
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control 
                        type="text" 
                        placeholder="Phone" 
                        onChange={(e) => this.setState({phone: e.target.value})}
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="userName">
                    <Form.Label column sm="3">
                    Username
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control 
                        type="text" 
                        placeholder="User Name" 
                        onChange={(e) => this.setState({username: e.target.value})}
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="password">
                    <Form.Label column sm="3">
                    Password
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => this.setState({password: e.target.value})}
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="confirmPassword">
                    <Form.Label column sm="3">
                    Confirm Password
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm Password" 
                        onChange={(e) => this.setState({confirmPassword: e.target.value})}
                    />
                    </Col>
                </Form.Group>
                <Button 
                    variant="primary" 
                    type="submit"
                    onClick={(e) => this.register(e)}
                >
                    Register
                </Button>
            </Form>
        )
    }
}

export default RegisterForm;
