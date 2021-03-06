import { React } from 'react';
import { Container, Row } from 'reactstrap';
import { useQuery } from 'react-query';
import TitleCard from '../TitleCard.js';
import GroupStats from '../stats/GroupStats';
import Loader from '../Loader';

const textStyle = {
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: 18,
    paddingBottom: 18,
    paddingLeft: 50,
    textAlign: 'left'
}

const fetch_members = async (arg) => {
    const groupid = arg.queryKey[1];
    const requestOptions = {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Token ' + arg.queryKey[2] },
    };

    const response = await fetch(`https://icoc-mgt-dashboard-backend.herokuapp.com/api/southMS/members/${groupid}/`, requestOptions);
    return response.json()
}

const fetch_parentgroup = async (arg) => {
    const groupid = arg.queryKey[1];
    const requestOptions = {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Token ' + arg.queryKey[2] },
    };
    const response = await fetch(`https://icoc-mgt-dashboard-backend.herokuapp.com/api/southMS/parentgroup/${groupid}/`, requestOptions);
    return response.json()
}

const FamilyGroupPanel = (props) => {

    const { status, data } = useQuery(['members', props.familyGroupID, props.userData.token], fetch_members, {
        staleTime: 30 * 1000,
    })

    const {
        status: pgstatus,
        data: pgdata
    } = useQuery(['parentgroup', props.familyGroupID, props.userData.token], fetch_parentgroup, {
        staleTime: 30 * 1000,
    })

    return (
        <div>
            {status === 'loading' && (
                <Loader />
            )}

            {status === 'error' && (
                <div>Error fetching member data</div>
            )}

            {status === 'success' && (
                <div>
                    <Container fluid>
                        <Row xs={1}>
                            <TitleCard title={data.groupInfo.name} />
                        </Row>

                        {props.showStats === true && (
                            <GroupStats groupID={props.familyGroupID} token={props.userData.token} />
                        )}

                        {
                            data.members.map((member, index) =>
                                <Row xs={1} key={index}>
                                    <div style={textStyle} onClick={() => props.onMemberClick(member)}> <li>{member.firstName}</li></div>
                                </Row>
                            )
                        }

                        {pgstatus === 'success' && (
                            <>
                                <hr />
                                <Row xs={1}>
                                    <div style={textStyle} onClick={() => props.onGroupClick(pgdata)}> <li>{pgdata.name}</li></div>
                                </Row>
                            </>
                        )}
                    </Container>
                </div>
            )}
        </div>
    );
}

export default FamilyGroupPanel;