import React from 'react';
import GroupMain from './group/GroupMain';
import withSignIn from "./withSignIn";

const Correction = (props) => {
    return (
        <div>
            <GroupMain action="Correction" token={props.token} />
        </div>
    );
}

export default withSignIn(Correction);