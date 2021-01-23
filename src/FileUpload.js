import React from 'react';
import GroupMain from './group/GroupMain';
import withSignIn from "./withSignIn";

const FileUpload = (props) => {
    return (
        <div>
            <GroupMain action="FileUpload" token={props.token} />
        </div>
    );
}

export default withSignIn(FileUpload);