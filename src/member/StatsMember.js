import { React } from 'react';
import { useQuery } from 'react-query';
import { Container, Row } from 'reactstrap';
import TitleCard from '../TitleCard.js';

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
    const response = await fetch(`https://ms21-backend.herokuapp.com/api/memberscriptures/${memid}`);
    return response.json()
}

const StatsMember = (props) => {
    const { status, data } = useQuery(['memberScripture', props.member.id], fetch_memberScriptures, {
        staleTime: 30 * 1000,
    })

    console.log(data)
    return (
        <div>
            {status === 'loading' && (
                <div>Loading data ...</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <Container fluid>
                    <Row xs={1}>
                        <TitleCard title={props.member.name} />
                    </Row>
                    <br/>
                    <div style={textStyle}>
                        {
                            data.memberScriptures.map((ms) =>
                                <div > <li>{ms.scripture} {ms.memorized}</li></div>
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