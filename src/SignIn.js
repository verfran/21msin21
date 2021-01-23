import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Alert,
} from 'reactstrap';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            token: '',
            showLoginFailedMsg: "false"
        };
    }

    onChangeEmail = (event) => {
        this.setState(
            {
                email: event.target.value,
                showLoginFailedMsg: "false"
            }
        )
    }

    onChangePassword = (event) => {
        this.setState(
            {
                password: event.target.value,
                showLoginFailedMsg: "false"
            }
        )
    }

    onSubmit = () => {
        this.setState({
            token: ''
        })
        const payload = {
            email: this.state.email,
            password: this.state.password,
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };
        fetch('https://icoc-mgt-dashboard-backend.herokuapp.com/accounts/login/', requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                this.setState({
                    token: '',
                    showLoginFailedMsg: "true"
                })
            }
            )
            .then((data) => {
                this.props.setToken(data.token)
                this.setState({
                    token: data.token,
                    showLoginFailedMsg: "false"
                })
                return;
            }
            )
            .catch((error) => {
            });
    }

    renderLoginFailed = () => {
        if (this.state.showLoginFailedMsg === "true") {
            return (
                <div style={{ padding: "20px", textAlign: 'center' }}>
                    <Alert color="danger">
                        Login failed, try again
                    </Alert>
                </div>
            )
        }
    }

    render() {
        return (
            <Container className="Login">
                <h2>Sign In</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="your email id"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                        </FormGroup>
                    </Col>
                    <Button color="primary" block onClick={this.onSubmit}>Submit</Button>
                </Form>
                {this.renderLoginFailed()}
            </Container>
        );
    }
}

export default SignIn;