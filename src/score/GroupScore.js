import { React, Component } from 'react';
import { CardBody, Card, CardText } from 'reactstrap';
import Months from './Months.js';

const bodyStyle = {
    color: 'black',
    textAlign: 'center',
    padding: "10px",
}

class GroupScore extends Component {
    render() {

        return (
            <div>
                <Card>
                    <CardBody style={bodyStyle} >
                        <CardText><big>Members {this.props.scriptureGroup.stats.menCount + this.props.scriptureGroup.stats.womenCount}</big></CardText>
                        <CardText><big>Women {this.props.scriptureGroup.stats.womenCount}</big></CardText>
                        <CardText><big>Men {this.props.scriptureGroup.stats.menCount}</big></CardText>
                    </CardBody>
                </Card>
                <Months months={this.props.scriptureGroup.stats.months}
                    onScriptureClick={this.props.onScriptureClick}
                    edit={this.props.edit} />
            </div>
        );
    }
}

export default GroupScore;