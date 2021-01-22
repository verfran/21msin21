import { React, Component } from 'react';
import GroupPanel from './GroupPanel';
import FamilyGroupPanel from './FamilyGroupPanel';
import FileUploadMember from '../member/FileUploadMember';
import CorrectionMember from '../member/CorrectionMember';
import StatsMember from '../member/StatsMember';

var RenderType = {
    GROUP: 1,
    MEMBER: 2,
}

class GroupMain extends Component {
    constructor() {
        super();
        this.state = {
            groupID: 1,
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

        if (this.props.action === "Correction") {
            return (<CorrectionMember member={this.state.member}
                onGroupClick={this.onGroupClick}
                familyGroup={this.state.group} />)
        }

        if (this.props.action === "Stats") {
            return (<StatsMember member={this.state.member}
                onGroupClick={this.onGroupClick}
                familyGroup={this.state.group} />)
        }
    }

    render() {
        let showStats = false;
        if (this.props.action === "Stats") {
            showStats = true;
        }

        if (this.state.renderType === RenderType.MEMBER) {
            return this.renderAction()
        }

        if (this.state.group != null && this.state.group.type === "Family Group") {
            return (<FamilyGroupPanel familyGroupID={this.state.groupID}
                onMemberClick={this.onMemberClick}
                onGroupClick={this.onGroupClick}
                showStats={showStats} />)
        }

        return (<GroupPanel groupID={this.state.groupID}
            onGroupClick={this.onGroupClick}
            showStats={showStats} />);
    }
}

export default GroupMain;