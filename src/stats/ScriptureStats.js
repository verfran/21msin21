import React from 'react';
import { CardBody, Card, CardText } from 'reactstrap';
import { FaUserCheck } from 'react-icons/fa';
import { Row } from 'reactstrap';

const bodyStyle = {
	color: 'black',
	textAlign: 'center',
	fontSize: 20,
}
const iconStyle = {
	textAlign: 'left',
	paddingLeft: "80px",
}
const countStyle = {
	textAlign: 'right',
	paddingRight: "80px",
	fontSize: 30,
}

const ScriptureStats = (props) => {

	return (
		<div>
			<Card>
				<CardBody style={bodyStyle} >
					<CardText>
						<Row xs={2}>
							<div style={iconStyle}>
								<FaUserCheck color='green' size='2em' />
							</div>
							<div style={countStyle}>
								<strong>
									{props.memorizedCount}
								</strong>
							</div>
						</Row>
						<br />
						{props.scripture}
					</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

export default ScriptureStats;