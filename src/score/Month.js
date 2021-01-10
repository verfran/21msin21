import React from 'react';
import { CardBody, Card, CardText } from 'reactstrap';

const bodyStyle = {
    color: 'black',
    textAlign: 'center',
    padding: "10px",
    fontSize: 18,
}

const linkStyle = {
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
}

const Month = (props) => {

    let onEditScripture = (scp) => {}
    let editStyle = {}
    if (props.edit === "true") {
        editStyle = linkStyle
        onEditScripture = props.onScriptureClick
    }

    return (
        <div>
            <Card>
                <CardBody style={bodyStyle} >
                    <CardText><big>{props.month.name}</big></CardText>
                    {
                        props.month.scriptures.map((scripture) =>
                            <CardText key={scripture.id}>{scripture.name} <br />
                                <div style={editStyle} onClick={() => onEditScripture(scripture)}>
                                    {scripture.menCount + scripture.womenCount} memorized
                                </div>
                            </CardText>
                        )
                    }

                </CardBody>
            </Card>
        </div>
    );
}

export default Month;