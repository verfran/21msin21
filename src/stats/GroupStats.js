import { React } from 'react';
import { useQuery } from 'react-query';

const fetch_groupStats = async (arg) => {
    const groupid = arg.queryKey[1];
    const response = await fetch(`http://127.0.0.1:8000/api/groupstats/${groupid}`);
    return response.json()
}

const GroupStats = (props) => {

    const { status, data } = useQuery(['groupStats', props.groupID], fetch_groupStats, {
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
                <div>
                    {data.memoryScriptureStats}
                    <hr />
                </div>
            )}
        </div>
    );
}

export default GroupStats;