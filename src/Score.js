import React from 'react';
import { CardBody, CardTitle, Card, CardText } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const bodyStyle = {
    color: 'black',
    padding: "10px",
}

const textSize = { fontSize: '20px' }

const Score = (props) => {

    return (
        <Form style={bodyStyle}>
            <FormGroup check inline>
                <Label>
                    <br />
                    <big><b>JP Nagar</b></big>
                    <br />
                    <br />
                    <hr />
                </Label>
                <Label check>
                    <big>Raju Namdev</big><Input type="checkbox" />
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <big>Verkeys Francis </big><Input type="checkbox" />
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <big>Anny Francis </big><Input type="checkbox" />
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <big>Mary Thangam </big><Input type="checkbox" />
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <big>Florence </big><Input type="checkbox" />
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <big>Suguna </big><Input type="checkbox" />
                </Label>
            </FormGroup>
        </Form>
    )

    return (
        <div>
            <Card>
                <CardBody style={bodyStyle} >
                    <CardTitle><h3>JP Nagar</h3></CardTitle>
                    <CardText style={textSize}>one</CardText>
                </CardBody>
            </Card>
        </div>

    );
}

export default Score;