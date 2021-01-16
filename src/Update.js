import React, { Component } from 'react';
import { FormGroup, FormText, Button, Input } from 'reactstrap';

const formStyle = {
    padding: "30px",
}

class Update extends Component {
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
        formData.append("member", 40)

        const requestOptions = {
            method: 'POST',
            body: formData,
        };
        fetch('http://127.0.0.1:8000/api/fileupload/', requestOptions)
            .then(response => response.json())
    }

    render() {
        return (
            <div style={formStyle}>
                <FormGroup row>
                    <Input type="file" name="file" id="exampleFile" onChange={this.onChooseFile} />
                    <FormText color="muted">
                        Choose the scripture image and press upload button.
                </FormText>
                </FormGroup>
                <div style={{ padding: "15px" }}>
                    <Button color="info" size="lg" block onClick={this.onUpload}>Upload</Button>
                </div>
            </div>
        );
    }
}


export default Update;