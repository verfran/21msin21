import { React, Component } from 'react';
import { Container, Row } from 'reactstrap';
import ScoreMonth from './ScoreMonth.js'
import ScoreChildren from './ScoreChildren.js'
import TitleCard from './TitleCard.js'

class ScoreGroup extends Component {
    render() {

        return (
            <div>
                <Container fluid>
                <Row xs={1}>
                        <TitleCard title="South Region" />
                    </Row>
                    <Row xs={1}>
                        <ScoreMonth />
                    </Row>
                    <Row xs={1}>
                        <ScoreChildren />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ScoreGroup;