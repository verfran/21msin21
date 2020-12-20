import React from 'react';
import { CardBody, CardTitle, Card, CardText } from 'reactstrap';

const bodyStyle = {
    color: 'black',
    textAlign: 'center',
    padding: "10px",
}

const ScoreMonth = (props) => {

    return (
        <div>
            <Card>
                <CardBody style={bodyStyle} >
                    <CardTitle><h4>January</h4></CardTitle>
                    <CardText><big>100 out of 300 completed 3 scriptures</big></CardText>
                    <CardText><big>150 out of 300 completed 2 scriptures</big></CardText>
                    <CardText><big>170 out of 300 completed 1 scriptures</big></CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default ScoreMonth;