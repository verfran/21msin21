import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Loader from '../Loader';
import { SquareLoader } from 'react-spinners'

const nameStyle = {
    color: 'black',
    padding: "3px",
    textAlign: 'center',
    fontSize: 18,
}

const loadingIconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px",
}

const fetch_memberScriptures = async (arg) => {
    const memid = arg.queryKey[1];
    const requestOptions = {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Token ' + arg.queryKey[2] },
    };

    const response = await fetch(`https://icoc-mgt-dashboard-backend.herokuapp.com/api/southMS/memberscriptures/${memid}/`, requestOptions);
    return response.json()
}

const MemberScriptures = (props) => {

    const [isUpdating, setIsUpdating] = useState(false);

    const { status, data } = useQuery(['memberScriptures', props.member.id, props.token], fetch_memberScriptures, {
        staleTime: 0.2 * 1000,
    })

    const updateMemberScripture = (member) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Token ' + props.token },
            body: JSON.stringify({ "memorized": member.memorized })
        };
        fetch(`https://icoc-mgt-dashboard-backend.herokuapp.com/api/southMS/updatememberscripture/${member.id}/`, requestOptions)
            .then(response => response.json())
            .then(() => {
                setIsUpdating(false)
            })

    }

    const handleChange = (event, selMem) => {
        let checked = 'N'
        if (event.target.checked) {
            checked = 'Y'
        }

        selMem.memorized = checked

        setIsUpdating(true)
        updateMemberScripture(selMem)
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

    if (isUpdating) {
        return (
            <div style={loadingIconStyle}>
                <SquareLoader size={25} color='#003366' />
            </div>)
    }

    return (
        <div>
            {status === 'loading' && (<Loader />)}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <>
                    <Form style={{ padding: "20px" }}>
                        {data.memberScriptures.map((ms) => renderCheckBox(ms))}
                    </Form>
                </>
            )}
        </div>
    );
}

export default MemberScriptures;