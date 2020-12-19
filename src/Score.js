import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const bodyStyle = {
    color: 'black',
    padding: "10px",
    textAlign: 'center',
}

const textSize = { fontSize: '20px' }

const Score = (props) => {

    return (
        <Form style={bodyStyle}>
            <Label>
                <big><b>JP Nagar</b></big>
            </Label>
            <hr/>
            <br />
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

export default Score;