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
                    { "id": "Gal 5: 22, 23", "verse": "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, 23 gentleness and self-control. Against such things there is no law." },
                    { "id": "1 Corinthians 10:13", "verse": "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it." },
                    { "id": "1 John 1:9", "verse": "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
                ],
                "application": {
                    "notes": "God is always faithful to us and the scriptures encourage us to be faithful as well. During the coming weeks see how you can apply the following in your life.",
                    "challenge": [
                        {"id": "Share how you are able to see God’s faithfulness in your life"},
                        {"id": "Confess the sins so that you can be purified from all unrighteousness"},
                    ]
                },
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