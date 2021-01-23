import React, { Component } from 'react';
import { FormGroup, FormText, Button, Input } from 'reactstrap';
import { Container, Row } from 'reactstrap';
import TitleCard from '../TitleCard.js';
import UploadedFiles from './UploadedFiles.js';
import { ClimbingBoxLoader } from 'react-spinners'

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

const uploadTextStyle = {
    color: '#003366',
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
}

const loadingIconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px",
}

class FileUploadMember extends Component {
    constructor() {
        super();
        this.state = {
            fileName: "",
            selectedFile: null,
            isUploading: false,
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

        this.setState({ isUploading: true }, () => { this.fileUpload() })
    }

    fileUpload = () => {
        const formData = new FormData()

        formData.append("name", this.state.selectedFile)
        formData.append("member", this.props.member.id)

        const requestOptions = {
            method: 'POST',
            body: formData,
            headers: { 'Authorization': 'Token ' + this.props.token },
        };
        fetch('https://icoc-mgt-dashboard-backend.herokuapp.com/api/southMS/fileupload/', requestOptions)
            .then(response => response.json())
            .then(() => {
                this.setState(
                    {
                        fileName: "",
                        selectedFile: null,
                        isUploading: false,
                    }
                )
            })
    }

    render() {

        if (this.state.isUploading) {
            return (
                <>
                    <div style={loadingIconStyle}>
                        <ClimbingBoxLoader size={25} color='#003366' />
                    </div>
                    <div style={uploadTextStyle}>Uploading file. Please wait.<br/>You will be re-directed to member page once the upload is done</div>
                </>
            )
        }

        return (
            <div style={formStyle}>
                <Container fluid>
                    <Row xs={1}>
                        <TitleCard title={"Upload file for " + this.props.member.firstName} />
                    </Row>
                    <Row xs={1}>
                        <UploadedFiles memberid={this.props.member.id} token={this.props.token} />
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