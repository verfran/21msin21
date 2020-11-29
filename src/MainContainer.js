import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import TitleCard from './TitleCard'
import MonthContainer from './MonthContainer'

class MainContainer extends Component {
    render() {

        return (
            <div>
                <Container fluid>
                <Row xs={1}>
                        <TitleCard/>
                    </Row>
                    <Row xs={1}>
                        <MonthContainer/>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default MainContainer;