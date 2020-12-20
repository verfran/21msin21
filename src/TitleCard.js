import React from 'react';
import { CardBody, CardTitle, Card } from 'reactstrap';

const bodyStyle = {
    color: 'black',
    textAlign: 'center',
}

const TitleCard = (props) => {

    return (
        <div>
            <Card>
                <CardBody style={bodyStyle} >
                    <CardTitle><h4>{props.title}</h4></CardTitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default TitleCard;