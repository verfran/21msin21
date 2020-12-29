import { React, Component } from 'react';
import { CardBody, Card, CardText } from 'reactstrap';
import TitleCard from '../TitleCard.js';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const linkStyle = {
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: 18,
    paddingBottom: 18,
    textAlign: 'center'
}

const nameStyle = {
    color: 'black',
    padding: "3px",
    textAlign: 'center',
    fontSize: 18,
}
class EditScripture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scriptureID: this.props.scripture.id,
            scriptureName: this.props.scripture.name,
            isLoading: true,
            members: [],
        };
    }

    componentDidMount() {
        var mems = []
        this.props.scripture.members.forEach(member => {
            mems.push(member)
        })

        this.setState({ isLoading: false, members: mems });
    }

    handleChange = (event, selMem) => {
        if (selMem.memorized === 'Y') {
            selMem.memorized = 'N'
        }
        else {
            selMem.memorized = 'Y'
        }
    };

    onSave = () => {

        this.state.members.forEach(mem => {
            this.updateMemberScripture(mem)
        })
    }

    updateMemberScripture = (mem) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "memorized": mem.memorized })
        };
        fetch(`https://ms21-backend.herokuapp.com/api/memberscripture/${mem.msid}/`, requestOptions)
            .then(response => response.json())
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>is loading</div>
            )
        }

        const renderCheckBox = (mem) => {
            if (mem.memorized === 'Y') {
                return (
                    <div style={nameStyle}>
                        <FormGroup check inline>
                            <Label check>
                                <big>{mem.name} </big><Input type="checkbox" id={mem.id} defaultChecked
                                    onChange={(event) => this.handleChange(event, mem)} />
                            </Label>
                        </FormGroup>
                    </div>
                )
            }

            return (
                <div style={nameStyle}>
                    <FormGroup check inline>
                        <Label check>
                            <big>{mem.name} </big><Input type="checkbox" id={mem.id}
                                onChange={(event) => this.handleChange(event, mem)} />
                        </Label>
                    </FormGroup>
                </div>
            )
        }

        return (
            <div>
                <TitleCard title={this.state.scriptureName} />
                <Form style={{padding: "20px"}}>
                    {this.state.members.map((mem) => renderCheckBox(mem))}
                </Form>

                <hr />
                <div style={{ padding: "15px" }}>
                    <Button color="success" size="lg" block onClick={this.onSave}>Save</Button>
                </div>

                <Card>
                    <CardBody style={linkStyle} onClick={() => this.props.onChildGroupClick(this.props.parentGroupInfo.id)}>
                        <CardText><big>{this.props.parentGroupInfo.name}</big></CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default EditScripture;