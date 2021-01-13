import React, { Component } from 'react';
import { FormGroup, FormText, Button, Input } from 'reactstrap';
import { Container, Row } from 'reactstrap';
import TitleCard from '../TitleCard.js';

const formStyle = {
    padding: "30px",
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
            alert("choose a file upload")
        }

        const formData = new FormData()

        formData.append("name", this.state.selectedFile)
        formData.append("member", this.props.member.id)

        const requestOptions = {
            method: 'POST',
            body: formData,
        };
        fetch('https://ms21-backend.herokuapp.com/api/fileupload/', requestOptions)
            .then(response => response.json())
            .then(this.setState(
                {
                    fileName: "",
                    selectedFile: null,
                }
            ))
    }

    render() {
        return (
            <div style={formStyle}>
                <Container fluid>
                    <Row xs={1}>
                        <TitleCard title={"Upload file for " + this.props.member.name} />
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
                </Container>
            </div>
        );
    }
}

export default FileUploadMember;