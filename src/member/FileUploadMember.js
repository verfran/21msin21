import React, { Component } from 'react';
import { FormGroup, FormText, Button, Input } from 'reactstrap';
import { Container, Row } from 'reactstrap';
import TitleCard from '../TitleCard.js';
import UploadedFiles from './UploadedFiles.js';

const formStyle = {
    padding: "30px",
}

const clickableTextStyle = {
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: 18,
    paddingBottom: 18,
    paddingLeft: 50,
    textAlign: 'left'
}

class FileUploadMember extends Component {
    constructor() {
        super();
        this.state = {
            fileName: "",
            selectedFile: null,
        }
    }

    onChooseFile = (event) => {
        this.setState(
            {
                fileName: event.target.files[0].name,
                selectedFile: event.target.files[0]
            }
        )
    }

    onUpload = (event) => {
        if (this.state.fileName === "") {
            alert("choose a file to upload")
            return
        }

        const formData = new FormData()

        formData.append("name", this.state.selectedFile)
        formData.append("member", this.props.member.id)

        const requestOptions = {
            method: 'POST',
            body: formData,
        };
        fetch('https://icoc-mgt-dashboard-backend.herokuapp.com/api/southMS/fileupload/', requestOptions)
            .then(response => response.json())
            .then(this.setState(
                {
                    fileName: "",
                    selectedFile: null,
                }
            ))

        this.props.onGroupClick(this.props.familyGroup)
    }

    render() {
        return (
            <div style={formStyle}>
                <Container fluid>
                    <Row xs={1}>
                        <TitleCard title={"Upload file for " + this.props.member.firstName} />
                    </Row>
                    <Row xs={1}>
                        <UploadedFiles memberid={this.props.member.id} />
                    </Row>
                    <br />
                    <FormGroup row>
                        <Input type="file" name="file" id="exampleFile" onChange={this.onChooseFile} />
                        <FormText color="muted">
                            Choose a file to upload.
                        </FormText>
                    </FormGroup>
                    <div style={{ padding: "15px" }}>
                        <Button color="info" size="lg" block onClick={this.onUpload}>Upload</Button>
                    </div>
                    <>
                        <hr />
                        <Row xs={1}>
                            <div style={clickableTextStyle} onClick={() => this.props.onGroupClick(this.props.familyGroup)}> <li>{this.props.familyGroup.name}</li></div>
                        </Row>
                    </>

                </Container>
            </div>
        );
    }
}

export default FileUploadMember;