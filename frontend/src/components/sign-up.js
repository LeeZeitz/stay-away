import React, { Component } from "react";
import { Button, Form, Jumbotron } from "react-bootstrap";


const style = {
    margin: '8% 30%'
};

class SignUp extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={ {backgroundColor: '#428CE9'} } >
                    <h1 style={ {textAlign: 'center', padding: '50px 0', height: '150px'} }>
                        bigchungus.allah
                    </h1>
                </div>
                <div style={ style }>
                    <h3 style={ {textAlign: 'center'} }>
                        Sign Up
                    </h3>
                    <div>
                        <Form>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div style={ {float: 'center'} } >
                                <Button variant="primary" type="submit">
                                    Sign Up
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SignUp;