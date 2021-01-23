import React from 'react';
import GroupMain from './group/GroupMain';
import withSignIn from "./withSignIn";

const Correction = (props) => {
    return (
        <div>
            <GroupMain action="Correction" userData={props.userData} />
        </div>
    );
}

export default withSignIn(Correction);