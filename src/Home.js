import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import TitleCard from './TitleCard'
import MonthContainer from './MonthContainer'

class Home extends Component {
    render() {

        return (
            <div>
                <Container fluid>
                    <Row xs={1}>
                        <TitleCard />
                    </Row>
                    <Row xs={1}>
                        <MonthContainer preview={this.props.showPreview}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;