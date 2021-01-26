import { React } from 'react';
import { useQuery } from 'react-query';
import Loader from '../Loader';
import ScriptureStats from './ScriptureStats';

const textStyle = {
    fontSize: 18,
    paddingBottom: 18,
    paddingLeft: 20,
    textAlign: 'left'
}

const fetch_groupStats = async (arg) => {
    const groupid = arg.queryKey[1];
    const requestOptions = {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Token ' + arg.queryKey[2] },
    };

    const response = await fetch(`https://icoc-mgt-dashboard-backend.herokuapp.com/api/southMS/groupstats/${groupid}/`, requestOptions);
    return response.json()
}

const GroupStats = (props) => {

    const { status, data } = useQuery(['groupStats', props.groupID, props.token], fetch_groupStats, {
        staleTime: 30 * 1000,
    })

    return (
        <div>
            {status === 'loading' && (
                <div>
                    <Loader />
                </div>
            )
            }

            {
                status === 'error' && (
                    <div>Error fetching data</div>
                )
            }

            {
                status === 'success' && (
                    <div style={textStyle}>
                        <div>
                            Members {data.groupStats.memberCount.count}
                            <br />
                        Women {data.groupStats.memberCount.womenCount}
                            <br />
                        Men {data.groupStats.memberCount.menCount}
                            <hr />
                        </div>
                        <div>
                            {
                                data.groupStats.scriptureStats.map((ss, index) =>
                                    <div key={index}>
                                        <ScriptureStats memorizedCount={ss.memorizedCount} scripture={ss.name}/>
                                    </div>
                                )
                            }
                            <hr />
                        </div>
                        <div>
                            {
                                data.groupStats.memberCountStats.map((mc, index) =>
                                    <div key={index}> <li>{mc.memberMemorizedCount} memorized {mc.scriptureCount} scriptures</li></div>
                                )
                            }
                            <hr />
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default GroupStats;