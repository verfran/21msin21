import { React } from 'react';
import { Container, Row } from 'reactstrap';
import TitleCard from '../TitleCard.js';


const FileUploadMember = (props) => {

    return (
        <div>
            <Container fluid>
                <Row xs={1}>
                    <TitleCard title={props.member.name} />
                </Row>
            </Container>
        </div>
    );
}

export default FileUploadMember;