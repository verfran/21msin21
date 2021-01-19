import { React } from 'react';
import { Container, Row } from 'reactstrap';
import { useQuery } from 'react-query';
import TitleCard from '../TitleCard.js';
import GroupStats from '../stats/GroupStats';

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
    const response = await fetch(`https://ms21-backend.herokuapp.com/api/members/${groupid}`);
    return response.json()
}

const fetch_parentgroup = async (arg) => {
    const groupid = arg.queryKey[1];
    const response = await fetch(`https://ms21-backend.herokuapp.com/api/parentgroup/${groupid}`);
    return response.json()
}

const FamilyGroupPanel = (props) => {

    const { status, data } = useQuery(['members', props.familyGroupID], fetch_members, {
        staleTime: 30 * 1000,
    })

    const {
        status: pgstatus,
        data: pgdata
    } = useQuery(['parentgroup', props.familyGroupID], fetch_parentgroup, {
        staleTime: 30 * 1000,
    })

    return (
        <div>
            {status === 'loading' && (
                <div>Loading members ...</div>
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
                            <GroupStats groupID={props.familyGroupID}/>
                        )}

                        {
                            data.members.map((member) =>
                                <Row xs={1}>
                                    <div style={textStyle} onClick={() => props.onMemberClick(member)}> <li>{member.name}</li></div>
                                </Row>
                            )
                        }
                        
                        {pgstatus === 'loading' && (
                            <div>Loading parent group ...</div>
                        )}

                        {pgstatus === 'error' && (
                            <div>Error fetching parent group</div>
                        )}
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