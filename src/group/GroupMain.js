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
            groupID: -1,
            group: null,
            renderType: RenderType.GROUP,
        }
    }

    componentDidMount() {
        this.setState({ groupID: this.props.userData.rootGroupID });
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
                familyGroup={this.state.group}
                token={this.props.userData.token} />)
        }

        if (this.props.action === "Correction") {
            return (<CorrectionMember member={this.state.member}
                onGroupClick={this.onGroupClick}
                familyGroup={this.state.group}
                token={this.props.userData.token} />)
        }

        if (this.props.action === "Stats") {
            return (<StatsMember member={this.state.member}
                onGroupClick={this.onGroupClick}
                familyGroup={this.state.group}
                token={this.props.userData.token} />)
        }
    }

    render() {
        if (this.state.groupID === -1) {
            return (<div>no permission</div>)
        }
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
                showStats={showStats}
                userData={this.props.userData} />)
        }

        return (<GroupPanel groupID={this.state.groupID}
            onGroupClick={this.onGroupClick}
            showStats={showStats}
            userData={this.props.userData} />);
    }
}

export default GroupMain;