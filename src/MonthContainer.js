import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Month from './Month'

class MonthContainer extends Component {
    constructor() {
        super();
        this.state = {
            feb: {
                "name": "February",
                "scriptures": [
                    { "id": "Matthew 5:16", "verse": "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven" },
                    { "id": "Matthew 6:33, 34", "verse": "But seek first his kingdom and his righteousness, and all these things will be given to you as well. 34 Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own" }
                ]
            },
            jan: {
                "name": "January",
                "scriptures": [
                    { "id": "John 3:16", "verse": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life" },
                    { "id": "Matthew 5:11, 12", "verse": "Blessed are you when people insult you, persecute you and falsely say all kinds of evil against you because of me. 12 Rejoice and be glad, because great is your reward in heaven, for in the same way they persecuted the prophets who were before you" },
                ]
            },
        }
    }

    render() {
        var monthItems = []

        monthItems.push(this.state.feb)
        monthItems.push(this.state.jan)

        return (
            <div>
                <Container fluid>
                    {monthItems.map((month) =>
                        <div>
                            <Row xs={1}>
                                <Month monthData = {month}/>
                            </Row>
                        </div>
                    )}

                </Container>
            </div>
        );
    }
}


export default MonthContainer;