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

const fetch_groups = async (arg) => {
    const groupid = arg.queryKey[1];
    const response = await fetch(`https://icoc-mgt-dashboard-backend.herokuapp.com/api/southMS/groups/${groupid}`);
    return response.json()
}

const GroupPanel = (props) => {

    const { status, data } = useQuery(['group', props.groupID], fetch_groups, {
        staleTime: 30 * 1000,
    })

    return (
        <div>
            {status === 'loading' && (
                <div>Loading data ...</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <div>
                    <Container fluid>
                        <Row xs={1}>
                            <TitleCard title={data.groupInfo.name} />
                        </Row>

                        {props.showStats === true && (
                            <GroupStats groupID={props.groupID}/>
                        )}

                        {
                            data.groupGroups.map((child, index) =>
                                <Row xs={1} key={index}>
                                    <div style={textStyle} onClick={() => props.onGroupClick(child)}> <li>{child.name}</li></div>
                                </Row>
                            )
                        }
                        <hr />
                        {data.groupInfo.parentGroup != null && (
                            <Row xs={1}>
                                <div style={textStyle} onClick={() => props.onGroupClick(data.parentGroupInfo)}> <li>{data.parentGroupInfo.name}</li></div>
                            </Row>
                        )}
                    </Container>
                </div>
            )}
        </div>
    );
}

export default GroupPanel;