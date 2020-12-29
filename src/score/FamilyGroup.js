import React from 'react';
import { CardBody, Card, CardText } from 'reactstrap';
import TitleCard from '../TitleCard.js';
import GroupScore from './GroupScore.js';

const linkStyle = {
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: 18,
    paddingBottom: 18,
    textAlign: 'center'
}

const FamilyGroup = (props) => {

    return (
        <div>
            <TitleCard title={props.groupStats.groupInfo.name} />
            <GroupScore scriptureGroup={props.groupStats.scriptureGroup}
                onScriptureClick={props.onScriptureClick}
                edit="true" />
            <Card>
                <CardBody style={linkStyle} onClick={() => props.onChildGroupClick(props.parentGroupInfo.id)}>
                    <CardText><big>{props.parentGroupInfo.name}</big></CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default FamilyGroup;