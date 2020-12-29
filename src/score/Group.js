import { React, Component } from 'react';
import { Container, Row } from 'reactstrap';
import TitleCard from '../TitleCard.js';
import GroupScore from './GroupScore.js';
import Children from './Children.js';

class Group extends Component {
    render() {

        return (
            <div>
                <Container fluid>
                    <Row xs={1}>
                        <TitleCard title={this.props.groupStats.groupInfo.name} />
                    </Row>
                    <Row xs={1}>
                        <GroupScore scriptureGroup={this.props.groupStats.scriptureGroup}
                            edit="false" />
                    </Row>
                    <Row xs={1}>
                        <Children childrenGroupStats={this.props.groupStats.childrenGroupStats} onChildGroupClick={this.props.onChildGroupClick} />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Group;