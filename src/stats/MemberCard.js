import React from 'react';
import { CardBody, Card, CardText } from 'reactstrap';
import { FaUser, FaUsers } from 'react-icons/fa';
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
	fontSize: 20,
}

const MemberCard = (props) => {

	return (
		<div>
			<Card>
				<CardBody style={bodyStyle} >
					<CardText>
						<Row xs={2}>
							<div style={iconStyle}>
								<FaUsers color='green' size='1.5em' />
							</div>
							<div style={countStyle}>
								{props.memberCount.count}
							</div>
						</Row>
						<Row xs={2}>
							<div style={iconStyle}>
								<FaUser color='pink' size='1.3em' />
							</div>
							<div style={countStyle}>
								{props.memberCount.womenCount}
							</div>
						</Row>
						<Row xs={2}>
							<div style={iconStyle}>
								<FaUser color='blue' size='1.3em' />
							</div>
							<div style={countStyle}>
								{props.memberCount.menCount}
							</div>
						</Row>
					</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

export default MemberCard;