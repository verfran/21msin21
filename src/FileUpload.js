import React from 'react';
import GroupMain from './group/GroupMain';
import withSignIn from "./withSignIn";

const FileUpload = (props) => {
    return (
        <div>
            <GroupMain action="FileUpload" userData={props.userData} />
        </div>
    );
}

export default withSignIn(FileUpload);