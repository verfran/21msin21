import React from 'react';
import GroupMain from './group/GroupMain';
import withSignIn from "./withSignIn";

const Members = (props) => {
    return (
        <div>
			WIP
            {/*<GroupMain action="Members" userData={props.userData} />*/}
        </div>
    );
}

export default withSignIn(Members);