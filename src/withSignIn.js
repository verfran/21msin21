import React from 'react';
import SignIn from './SignIn';

const withSignIn = WrappedComponent => {
    class WithSignIn extends React.Component {
        constructor() {
            super();
            this.state = {
                isSignedIn: false,
                token: '',
            }
        }

        setToken = (tok) => {
            this.setState({ token: tok, isSignedIn: true })
        }

        render() {
            if (!this.state.isSignedIn) {
                return (
                    <div>
                        <SignIn setToken={this.setToken} />
                    </div>
                )
            }
            return (
                <div>
                    <WrappedComponent {...this.props} token={this.state.token} />
                </div>)
        }
    }

    return WithSignIn
}

export default withSignIn;