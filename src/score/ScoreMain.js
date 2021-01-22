import { React, Component } from 'react';
import { Container, Row } from 'reactstrap';
import Group from './Group.js';
import FamilyGroup from './FamilyGroup.js';
import EditScripture from './EditScripture.js';
import Login from './Login.js';

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
            loggedIn: false,
            groupID: 2,
            fgStats: {},
            scripture: {},
            renderType: RenderType.LOADING,
            token: '',
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        if (this.state.loggedIn === false) {
            return;
        }

        this.setState({ renderType: RenderType.LOADING });

        const requestOptions = {
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Token ' + this.state.token },
        };
        fetch('https://icoc-mgt-dashboard-backend.herokuapp.com/api/southMS/msscore/' + this.state.groupID + '/', requestOptions)
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

    setToken = (tok) =>{
        this.setState({token:tok, loggedIn: true})
        this.fetchData()
    }

    render() {

        if (this.state.loggedIn === false) {
            return (
                <div>
                    <Login setToken={this.setToken}/>
                </div>)
        }

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