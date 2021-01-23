import { React } from 'react';
import { useQuery } from 'react-query';
import { Container, Row } from 'reactstrap';
import TitleCard from '../TitleCard.js';
import Loader from '../Loader';

const textStyle = {
    fontSize: 18,
    paddingBottom: 18,
    paddingLeft: 20,
    textAlign: 'left'
}

const clickableTextStyle = {
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: 18,
    paddingBottom: 18,
    paddingLeft: 50,
    textAlign: 'left'
}

const fetch_memberScriptures = async (arg) => {
    const memid = arg.queryKey[1];
    const requestOptions = {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Token ' + arg.queryKey[2] },
    };
    const response = await fetch(`https://icoc-mgt-dashboard-backend.herokuapp.com/api/southMS/memberscriptures/${memid}/`, requestOptions);
    return response.json()
}

const StatsMember = (props) => {
    const { status, data } = useQuery(['memberScripture', props.member.id, props.token], fetch_memberScriptures, {
        staleTime: 30 * 1000,
    })

    return (
        <div>
            {status === 'loading' && (<Loader />)}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <Container fluid>
                    <Row xs={1}>
                        <TitleCard title={props.member.firstName} />
                    </Row>
                    <br />
                    <div style={textStyle}>
                        {
                            data.memberScriptures.map((ms, index) =>
                                <div key={index}> <li>{ms.scripture} {ms.memorized}</li></div>
                            )
                        }
                    </div>
                    <>
                        <hr />
                        <Row xs={1}>
                            <div style={clickableTextStyle} onClick={() => props.onGroupClick(props.familyGroup)}> <li>{props.familyGroup.name}</li></div>
                        </Row>
                    </>
                </Container>
            )}
        </div>
    );
}

export default StatsMember;