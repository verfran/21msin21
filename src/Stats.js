import React from 'react';
import GroupMain from './group/GroupMain';
import withSignIn from "./withSignIn";

const Stats = (props) => {
    return (
        <div>
            <GroupMain action="Stats" userData={props.userData} />
        </div>
    );
}

export default withSignIn(Stats);