import React from 'react';
import { CardBody, CardTitle, Card } from 'reactstrap';

const bodyStyle = {
    color: 'black',
    textAlign: 'center',
    whiteSpace: 'nowrap',
}

const TitleCard = (props) => {

    return (
        <div>
            <Card>
                <CardBody style={bodyStyle} >
                    <CardTitle><h3>21 Memory Scriptures in year 21</h3></CardTitle>
                    <hr />
                </CardBody>
            </Card>
        </div>
    );
}

export default TitleCard;