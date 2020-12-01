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
                    { "id": "Matthew 5:16", "verse": "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven." },
                    { "id": "Matthew 6:33, 34", "verse": "But seek first his kingdom and his righteousness, and all these things will be given to you as well. 34 Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own." },
                ]
            },
            jan: {
                "name": "January",
                "scriptures": [
                    { "id": "Matthew 4:4", "verse": "Jesus answered, “It is written: ‘Man shall not live on bread alone, but on every word that comes from the mouth of God.’\"" },
                    { "id": "Matthew 5:16", "verse": "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven." },
                    { "id": "Matthew 6:31-34", "verse": "So do not worry, saying, ‘What shall we eat?’ or ‘What shall we drink?’ or ‘What shall we wear?’ 32 For the pagans run after all these things, and your heavenly Father knows that you need them. 33 But seek first his kingdom and his righteousness, and all these things will be given to you as well. 34 Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own." },
                ]
            },
        }
    }

    render() {
        var monthItems = []

        //monthItems.push(this.state.feb)
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