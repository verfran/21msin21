import React from 'react';
import { CardBody, Card, CardText } from 'reactstrap';

const bodyStyle = {
    color: 'black',
    textAlign: 'left',
    padding: "10px",
}

const ApplicationCard = (props) => {
    return (
        <div>
            <Card>
                <CardBody style={bodyStyle} >
                    <CardText>
                        <big>
                            <p><strong>Practical</strong></p>
                            <p>Couldn&rsquo;t our world use a dose of love right now? Probably your corner of the world needs it just as much as another corner. What could the fruit of the Spirit love look like for you? Is it one of these?</p>
                            <ul>
                                <li>Picking up your spouse&rsquo;s clothes off the floor instead of nagging them to put them in the laundry basket.</li>
                                <li>Helping your child with homework when you would really rather get some much-needed sleep.</li>
                                <li>Showing kindness to your adult child who believes differently than you long for.</li>
                                <li>Writing an encouraging note to a friend or colleague.</li>
                                <li>Forgiving the person who has deeply hurt you.</li>
                            </ul>
                            <p>&nbsp;</p>
                            <p><strong>Application</strong></p>
                            <p>How was your experience throughout the month?</p>
                            <p>How would you rate yourself in Love 1 being able to offer it to others 10 being not</p>
                            <p>What would you like to do different in your life to hold on to this practice?</p>
                        </big>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default ApplicationCard;