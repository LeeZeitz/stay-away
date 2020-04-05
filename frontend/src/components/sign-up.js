import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

const style = {
    margin: '8% 30%'
};

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        }
    }

    sendSignUp = () => {
        axios.post('http://localhost:3000/signup', this.state);
    }

    render() {
        return (
            <React.Fragment>
                <div style={ {backgroundColor: '#428CE9'} } >
                    <h1 style={ {textAlign: 'center', padding: '50px 0', height: '150px'} }>
                        GamesWDaBois
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
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({email: e.target.value}) }/>
                            </Form.Group>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" onChange={(e) => this.setState({username: e.target.value})} />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                            </Form.Group>
                            <div style={ {float: 'center'} } >
                                <Button variant="primary" onClick={ this.sendSignUp } >
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