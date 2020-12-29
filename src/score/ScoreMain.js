import { React, Component } from 'react';
import { Container, Row } from 'reactstrap';
import Group from './Group.js';
import FamilyGroup from './FamilyGroup.js';
import EditScripture from './EditScripture.js';

var RenderType = {
    LOADING: 1,
    GROUP: 2,
    FG: 3,
    EDIT_SCRIPTURE: 4,
}

class ScoreMain extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: true,
            groupID: 2,
            fgStats: {},
            scripture: {},
            renderType: RenderType.LOADING,
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        this.setState({ renderType: RenderType.LOADING });

        fetch('http://127.0.0.1:8000/api/msscore/' + this.state.groupID + '/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    fgStats: {},
                    scripture: {},
                    renderType: RenderType.GROUP,
                    groupStats: json.memoryScriptureStats.groupStats,
                })
            });
    }

    onChildGroupClick = (arg) => {
        if (typeof (arg) === "number") {
            this.setState({ groupID: arg, fgStats: {}, renderType: RenderType.GROUP, scripture: {} }, () => { this.fetchData() })
        }
        else {
            this.setState({ fgStats: arg, renderType: RenderType.FG, scripture: {} })
        }
    }

    onScriptureClick = (scrptr) => {
        this.setState({ scripture: scrptr, renderType: RenderType.EDIT_SCRIPTURE })
    }

    render() {

        if (this.state.renderType === RenderType.LOADING) {
            return (<div>Loading ...</div>)
        }

        if (this.state.renderType === RenderType.EDIT_SCRIPTURE) {
            return (
                <div>
                    <Container fluid>
                        <Row xs={1}>
                            <EditScripture scripture={this.state.scripture}
                                parentGroupInfo={this.state.groupStats.groupInfo}
                                onChildGroupClick={this.onChildGroupClick} />
                        </Row>
                    </Container>
                </div>
            )
        }

        if (this.state.renderType === RenderType.FG) {
            return (
                <div>
                    <Container fluid>
                        <Row xs={1}>
                            <FamilyGroup groupStats={this.state.fgStats}
                                parentGroupInfo={this.state.groupStats.groupInfo}
                                onChildGroupClick={this.onChildGroupClick}
                                onScriptureClick={this.onScriptureClick} />
                        </Row>
                    </Container>
                </div>
            )
        }

        return (
            <div>
                <Container fluid>
                    <Row xs={1}>
                        <Group groupStats={this.state.groupStats} onChildGroupClick={this.onChildGroupClick} />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ScoreMain;