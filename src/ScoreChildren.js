import React from 'react';
import { NavLink, CardBody, Card, CardText } from 'reactstrap';

const bodyStyle = {
    color: 'black',
    textAlign: 'left',
    padding: "10px",
}

const ScoreMonth = (props) => {

    return (
        <div>
            <Card>
                <CardBody style={bodyStyle} >
                    <NavLink href="#">JP Nagar (10 completed 3, 12 completed 2)</NavLink>
                    <NavLink href="#">Behekhalli</NavLink>
                    <NavLink href="#">Vinayak nagar</NavLink>
                </CardBody>
            </Card>
        </div>
    );
}

export default ScoreMonth;