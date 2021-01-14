import { React, Component } from 'react';
import GroupPanel from './GroupPanel';
import FamilyGroupPanel from './FamilyGroupPanel';
import FileUploadMember from './FileUploadMember';

var RenderType = {
    GROUP: 1,
    FAMILY_GROUP: 2,
    MEMBER: 3,
}

class FileUploadMain extends Component {
    constructor() {
        super();
        this.state = {
            groupID: 2,
            group: null,
            renderType: RenderType.GROUP,
        }
    }

    onGroupClick = (grp) => {
        this.setState({
            group: grp,
            groupID: grp.id,
            renderType: RenderType.FAMILY_GROUP
        })
    }

    onMemberClick = (member) => {
        this.setState({ member: member, renderType: RenderType.MEMBER })
    }

    render() {
        if (this.state.renderType === RenderType.MEMBER) {
            return (<FileUploadMember member={this.state.member}
                onGroupClick={this.onGroupClick}
                familyGroup={this.state.group} />)
        }

        if (this.state.group != null && this.state.group.type === "Family Group") {
            return (<FamilyGroupPanel familyGroupID={this.state.groupID}
                onMemberClick={this.onMemberClick}
                onGroupClick={this.onGroupClick} />)
        }

        return (<GroupPanel group={this.state.groupID} onGroupClick={this.onGroupClick} />);
    }
}

export default FileUploadMain;