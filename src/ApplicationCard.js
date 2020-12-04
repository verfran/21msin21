import React from 'react';
import { CardBody, CardTitle, Card, CardText } from 'reactstrap';

const bodyStyle = {
    color: 'black',
    textAlign: 'left',
    padding: "10px",
}

const ApplicationCard = (props) => {
    return (
        <div>
            <Card>
                <CardBody style={bodyStyle} >
                    <CardTitle><h4>Application</h4></CardTitle>
                    <CardText><big>{props.application.notes}</big></CardText>
                    {props.application.challenge.map((chal) =>
                        <CardText><big> - {chal.id}</big></CardText>)
                    }
                </CardBody>
            </Card>
        </div>
    );
}

export default ApplicationCard;