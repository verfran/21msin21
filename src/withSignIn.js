import React from 'react';
import SignIn from './SignIn';

const withSignIn = WrappedComponent => {
    class WithSignIn extends React.Component {
        constructor() {
            super();
            this.state = {
                isSignedIn: false,
                userData: null,
            }
        }

        setUserData = (ud) => {
            this.setState({ userData: ud, isSignedIn: true })
        }

        render() {
            if (!this.state.isSignedIn) {
                return (
                    <div>
                        <SignIn setUserData={this.setUserData} />
                    </div>
                )
            }
            return (
                <div>
                    <WrappedComponent {...this.props} userData={this.state.userData} />
                </div>)
        }
    }

    return WithSignIn
}

export default withSignIn;