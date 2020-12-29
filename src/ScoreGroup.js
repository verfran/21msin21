import { React, Component } from 'react';
import { Container, Row } from 'reactstrap';
import ScoreChildren from './ScoreChildren.js'
import TitleCard from './TitleCard.js'
import ScoreMonthContainer from './ScoreMonthContainer.js'

class ScoreGroup extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: true,
            isLoaded: false,
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        this.setState({ isLoaded: false });

        fetch('http://127.0.0.1:8000/api/msscore/verfran@hotmail.com/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    groupStats: json.memoryScriptureStats.groupStats,
                })
            });
    }

    render() {

        if (!this.state.isLoaded) {
            return (<div>Loading ...</div>)
        }

        var vfsdata = this.state.groupStats.groupInfo
        console.log(vfsdata)

        return (
            <div>
                <Container fluid>
                    <Row xs={1}>
                        <TitleCard title={this.state.groupStats.groupInfo.name} />
                    </Row>
                    <Row xs={1}>
                        <ScoreMonthContainer />
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