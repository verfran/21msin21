import { React } from 'react';
import { useQuery } from 'react-query';
import { Container, Row } from 'reactstrap';
import TitleCard from '../TitleCard.js';
import MemberScripture from './MemberScripture';

const linkStyle = {
    textAlign: 'center',
    padding: "5px",
    fontSize: 18,
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

const fetch_urls = async (arg) => {
    const memid = arg.queryKey[1];
    const requestOptions = {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Token ' + arg.queryKey[2] },
    };

    const response = await fetch(`https://icoc-mgt-dashboard-backend.herokuapp.com/api/southMS/memberfiles/${memid}/`, requestOptions);
    return response.json()
}

const CorrectionMember = (props) => {

    const { status, data } = useQuery(['urls', props.member.id, props.token], fetch_urls, {
        staleTime: 30 * 1000,
    })

    let index = 1;
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
                        <TitleCard title={"Correction for " + props.member.firstName} />
                    </Row>
                    {
                        data.urls.map((url) =>
                            <div style={linkStyle} key={index}>
                                <a href={url}>File {index++}</a>
                                <br />
                            </div>
                        )
                    }
                    <Row xs={1}>
                        <MemberScripture member={props.member}
                            token={props.token} />
                    </Row>
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

export default CorrectionMember;