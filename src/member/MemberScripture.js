import { React } from 'react';
import { useQueryClient, useMutation, useQuery } from 'react-query';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const nameStyle = {
    color: 'black',
    padding: "3px",
    textAlign: 'center',
    fontSize: 18,
}

const fetch_memberScriptures = async (arg) => {
    const memid = arg.queryKey[1];
    const response = await fetch(`https://ms21-backend.herokuapp.com/api/memberscriptures/${memid}`);
    return response.json()
}

const put_memberScripture = async (ms) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "memorized": ms.memorized })
    };
    const response = await fetch(`https://ms21-backend.herokuapp.com/api/updatememberscripture/${ms.msid}/`, requestOptions)
    return response.json()
}

const MemberScripture = (props) => {

    const { status, data } = useQuery(['memberScripture', props.member.id], fetch_memberScriptures, {
        staleTime: 30 * 1000,
    })

    const queryClient = useQueryClient()

    const mutation = useMutation(put_memberScripture, {
        onSuccess: () => {
            queryClient.invalidateQueries('memberScripture')
            queryClient.invalidateQueries('groupStats')
        },
        onError: () => { alert("Something went wrong. Your changes are not saved. Please try later") },
    })

    const handleChange = (event, selMem) => {
        let checked = 'N'
        if (event.target.checked) {
            checked = 'Y'
        }
        mutation.mutate({
            msid: selMem.id,
            memorized: checked,
        })
    };

    const renderCheckBox = (ms) => {
        if (ms.memorized === 'Y') {
            return (
                <div style={nameStyle}>
                    <FormGroup check inline>
                        <Label check>
                            <big>{ms.scripture} </big><Input type="checkbox" id={ms.id} defaultChecked
                                onChange={(event) => handleChange(event, ms)} />
                        </Label>
                    </FormGroup>
                </div>
            )
        }

        return (
            <div style={nameStyle}>
                <FormGroup check inline>
                    <Label check>
                        <big>{ms.scripture} </big><Input type="checkbox" id={ms.id}
                            onChange={(event) => handleChange(event, ms)} />
                    </Label>
                </FormGroup>
            </div>
        )
    }

    return (
        <div>
            {status === 'loading' && (
                <div>Loading data ...</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <>
                    <hr />
                    <Form style={{ padding: "20px" }}>
                        {data.memberScriptures.map((ms) => renderCheckBox(ms))}
                    </Form>
                </>
            )}
        </div>
    );
}

export default MemberScripture;