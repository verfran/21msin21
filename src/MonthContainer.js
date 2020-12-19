import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Month from './Month'
import ApplicationCard from './ApplicationCard';

class MonthContainer extends Component {
    constructor() {
        super();
        this.state = {
            preview: {
                "name": "preview January",
                "scriptures": [
                    { "id": "Gal 5: 22, 23", "verse": "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, 23 gentleness and self-control. Against such things there is no law." },
                    { "id": "1 Corinthians 10:13", "verse": "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it." },
                    { "id": "1 John 1:9", "verse": "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
                ],
                "application": {
                    "notes": "God is always faithful to us and the scriptures encourage us to be faithful as well. During the coming weeks see how you can apply the following in your life.",
                    "challenge": [
                        { "id": "Share how you are able to see God’s faithfulness in your life" },
                        { "id": "Confess the sins so that you can be purified from all unrighteousness" },
                    ]
                },
            },
            jan: {
                "name": "January",
                "scriptures": [
                    { "id": "Romans 5:5  ", "verse": "And hope does not put us to shame, because God’s love has been poured out into our hearts through the Holy Spirit, who has been given to us." },
                    { "id": "John 13:34, 35", "verse": "A new command I give you: Love one another. As I have loved you, so you must love one another. 35 By this everyone will know that you are my disciples, if you love one another." },
                    { "id": "Colossians 3:12-14", "verse": "Therefore, as God’s chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, gentleness and patience. 13 Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you. 14 And over all these virtues put on love, which binds them all together in perfect unity." },
                ],
                "application": {
                    "notes": "God is always faithful to us and the scriptures encourage us to be faithful as well. During the coming weeks see how you can apply the following in your life.",
                    "challenge": [
                        { "id": "Share how you are able to see God’s faithfulness in your life" },
                        { "id": "Confess the sins so that you can be purified from all unrighteousness" },
                    ]
                },
            },
        }
    }

    render() {
        var monthItems = []

        if (this.props.preview === "true")
            monthItems.push(this.state.preview)
        monthItems.push(this.state.jan)

        return (
            <div>
                <Container fluid>
                    {monthItems.map((month) =>
                        <div>
                            <Row xs={1}>
                                <Month monthData={month} />
                            </Row>
                        </div>
                    )}
                    <ApplicationCard />
                </Container>
            </div>
        );
    }
}


export default MonthContainer;