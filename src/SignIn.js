import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Alert,
} from 'reactstrap';

var SignInStatus = {
    SIGN_IN_UNKNOWN: 1,
    SIGN_IN_FAILED: 3,
    SIGN_IN_NO_PERMISSION: 5,
}

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            signInStatus: SignInStatus.SIGN_IN_UNKNOWN,
            signInDisabled: false,
        };
    }

    onChangeEmail = (event) => {
        this.setState(
            {
                signInStatus: SignInStatus.SIGN_IN_UNKNOWN,
                email: event.target.value,
            }
        )
    }

    onChangePassword = (event) => {
        this.setState(
            {
                signInStatus: SignInStatus.SIGN_IN_UNKNOWN,
                password: event.target.value,
            }
        )
    }

    onSubmit = () => {
        this.setState({
            signInDisabled: true,
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
                    signInStatus: SignInStatus.SIGN_IN_FAILED,
                    signInDisabled: false,
                })
            }
            )
            .then((data) => {
                if (data.userData.rootGroupID === -1) {
                    this.setState({
                        signInStatus: SignInStatus.SIGN_IN_NO_PERMISSION,
                        signInDisabled: false,
                    })
                    return;
                }
                // looks like a successful Sign In
                this.props.setUserData(data.userData)
                this.setState({
                    signInStatus: SignInStatus.SIGN_IN_UNKNOWN,
                })
                return;
            }
            )
            .catch((error) => {
                console.log("error=", error)
            });
    }

    renderLoginFailed = () => {
        if (this.state.signInStatus === SignInStatus.SIGN_IN_UNKNOWN) {
            return;
        }

        let errorMessage = "Sign In failed, try again"
        if (this.state.signInStatus === SignInStatus.SIGN_IN_NO_PERMISSION) {
            errorMessage = "Sign In failed."
        }
        return (
            <div style={{ padding: "20px", textAlign: 'center' }}>
                <Alert color="danger">
                    {errorMessage}
                </Alert>
            </div>
        )
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
                    {
                        this.state.signInDisabled === true && (
                            <Button color="primary" disabled block onClick={this.onSubmit}>Submit</Button>
                        )
                    }
                    {
                        this.state.signInDisabled === false && (
                            <Button color="primary" block onClick={this.onSubmit}>Submit</Button>
                        )
                    }
                </Form>
                {this.renderLoginFailed()}
            </Container>
        );
    }
}

export default SignIn;