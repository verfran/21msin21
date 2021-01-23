import React from 'react';
import GroupMain from './group/GroupMain';
import withSignIn from "./withSignIn";

const Stats = (props) => {
    return (
        <div>
            <GroupMain action="Stats" token={props.token} />
        </div>
    );
}

export default withSignIn(Stats);