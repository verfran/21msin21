import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const bodyStyle = {
    color: 'black',
    padding: "10px",
    textAlign: 'center',
}

const ScoreEditZone = (props) => {

    return (
        <Form style={bodyStyle}>
            <Label>
                <big><b>Romams 5:5</b></big>
            </Label>
            <hr/>
            <Label>
                <b>JP Nagar (January)</b>
            </Label>
            <hr/>
            <FormGroup check inline>
                <Label check>
                    <big>Raju Namdev   </big><Input type="checkbox" />
                </Label>
            </FormGroup>
            <br />
            <FormGroup check inline>
                <Label check>
                    <big>Verkeys Francis </big><Input type="checkbox" />
                </Label>
            </FormGroup>
            <hr />
            <FormGroup check inline>
                <Label check>
                    <big>Anny Francis </big><Input type="checkbox" />
                </Label>
            </FormGroup>
            <br />
            <FormGroup check inline>
                <Label check>
                    <big>Mary Thangam </big><Input type="checkbox" />
                </Label>
            </FormGroup>
            <br />
            <FormGroup check inline>
                <Label check>
                    <big>Florence </big><Input type="checkbox" />
                </Label>
            </FormGroup>
            <br />
            <FormGroup check inline>
                <Label check>
                    <big>Suguna </big><Input type="checkbox" />
                </Label>
            </FormGroup>
            <hr />
            <Button color="success" size="lg" block >Save</Button>
        </Form>
    )
}

export default ScoreEditZone;