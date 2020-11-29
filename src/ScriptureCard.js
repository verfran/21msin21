import React from 'react';
import { CardBody, CardTitle, Card } from 'reactstrap';

const bodyStyle = {
    color: 'black',
    textAlign: 'center',
}

const ScriptureCard = (props) => {

    return (
        <div>
            <Card style={{ padding: "10px" }}>
                <CardBody style={bodyStyle} >
                    <CardTitle><h5>{props.scripture.id}</h5></CardTitle>
                    {
                        <div>{props.scripture.verse}</div>
                    }
                </CardBody>
            </Card>
        </div>
    );
}

export default ScriptureCard;