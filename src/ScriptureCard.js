import React from 'react';
import { CardBody, CardTitle, Card, CardText } from 'reactstrap';

const bodyStyle = {
    color: 'black',
    textAlign: 'left',
    padding: "10px",
}

const ScriptureCard = (props) => {

    return (
        <div>
            <Card>
                <CardBody style={bodyStyle} >
                    <CardTitle><h4>{props.scripture.id}</h4></CardTitle>
                    <CardText><big>{props.scripture.verse}</big></CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default ScriptureCard;