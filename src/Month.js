import React from 'react';
import { CardBody, CardTitle, Card } from 'reactstrap';
import ScriptureCard from './ScriptureCard';

const bodyStyle = {
    color: 'black',
    textAlign: 'center',
}

const Month = (props) => {

    return (
        <div>
            <Card>
                <CardBody style={bodyStyle} >
                    <CardTitle><h4>{props.monthData.name}</h4></CardTitle>
                    {
                        props.monthData.scriptures.map((scripture) =>
                            <div>
                                <ScriptureCard scripture = {scripture} />
                            </div>
                        )
                    }
                    <hr />
                </CardBody>
            </Card>
        </div>
    );
}

export default Month;