import React from 'react';

const withStats = WrappedComponent => {
    class WithStats extends React.Component {
        render() {
            // Wraps the input component in a container, without mutating it. Good!
            return (
                <div>
                    <WrappedComponent {...this.props} />
                </div>)
        }
    }

    return WithStats
}

export default withStats;