import { React } from 'react';
import { useQuery } from 'react-query';

const linkStyle = {
    textAlign: 'center',
    padding: "5px",
    fontSize: 18,
}

const fetch_urls = async (arg) => {
    const memid = arg.queryKey[1];
    const response = await fetch(`https://icoc-mgt-dashboard-backend.herokuapp.com/api/southMS/memberfiles/${memid}`);
    return response.json()
}

const UploadedFiles = (props) => {

    const { status, data } = useQuery(['urls', props.memberid], fetch_urls, {
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
                <div>
                    {
                        data.urls.map((url) =>
                            <div style={linkStyle} key={index}>
                                <a href={url}>File {index++}</a>
                                <br />
                            </div>
                        )
                    }
                    <hr />
                </div>
            )}
        </div>
    );
}

export default UploadedFiles;