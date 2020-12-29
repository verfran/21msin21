import { React, Component } from 'react';
import { Container, Row } from 'reactstrap';
import ScoreMonth from './ScoreMonth.js'

class ScoreMonthContainer extends Component {
    render() {

        return (
            <div>
                <Container fluid>
                    <Row xs={1}>
                        <ScoreMonth />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ScoreMonthContainer;