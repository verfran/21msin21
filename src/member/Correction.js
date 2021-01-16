import { React } from 'react';
import { useQuery } from 'react-query';
import { Container, Row } from 'reactstrap';
import TitleCard from '../TitleCard.js';

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
    const response = await fetch(`https://ms21-backend.herokuapp.com/api/memberfiles/${memid}`);
    return response.json()
}

const Correction = (props) => {

    const { status, data } = useQuery(['urls', props.member.id], fetch_urls, {
        staleTime: 1 * 1000,
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
                        <TitleCard title={"Correction for " + props.member.name} />
                    </Row>
                    {
                        data.urls.map((url) =>
                            <div style={linkStyle}>
                                <a href={url}>File {index++}</a>
                                <br />
                            </div>
                        )
                    }
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

export default Correction;