import { React, Component } from 'react';
import GroupPanel from './GroupPanel';
import FamilyGroupPanel from './FamilyGroupPanel';
import FileUploadMember from '../member/FileUploadMember';
import Correction from '../member/Correction';

var RenderType = {
    GROUP: 1,
    MEMBER: 2,
}

class GroupMain extends Component {
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
            renderType: RenderType.GROUP
        })
    }

    onMemberClick = (member) => {
        this.setState({ member: member, renderType: RenderType.MEMBER })
    }

    renderAction = () => {
        if (this.props.action === "FileUpload") {
            return (<FileUploadMember member={this.state.member}
                onGroupClick={this.onGroupClick}
                familyGroup={this.state.group} />)
        }

        return(<Correction memberid={13} />)
    }

    render() {
        if (this.state.renderType === RenderType.MEMBER) {
            return this.renderAction()
        }

        if (this.state.group != null && this.state.group.type === "Family Group") {
            return (<FamilyGroupPanel familyGroupID={this.state.groupID}
                onMemberClick={this.onMemberClick}
                onGroupClick={this.onGroupClick} />)
        }

        return (<GroupPanel group={this.state.groupID} onGroupClick={this.onGroupClick} />);
    }
}

export default GroupMain;