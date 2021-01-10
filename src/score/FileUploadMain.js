import { React, Component } from 'react';
import GroupPanel from './GroupPanel';
import FamilyGroupPanel from './FamilyGroupPanel';

class FileUploadMain extends Component {
    constructor() {
        super();
        this.state = {
            groupID: 2,
            group: null,
        }
    }

    onGroupClick = (grp) => {
        this.setState({ group: grp, groupID: grp.id })
    }

    onMemberClick = (member) => {
        this.setState({ member: member })
    }

    render() {
        if (this.state.group != null && this.state.group.type === "Family Group") {
            return (<FamilyGroupPanel familyGroupID={this.state.groupID}
                onMemberClick={this.onMemberClick}
                onGroupClick={this.onGroupClick}/>)
        }
        return (<GroupPanel group={this.state.groupID} onGroupClick={this.onGroupClick} />);
    }
}

export default FileUploadMain;