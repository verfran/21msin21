import React from 'react';
import { Card, CardHeader } from 'reactstrap';

const textStyle = {
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: 14,
    paddingBottom: 14,
    textAlign: 'left'
}

const Children = (props) => {

    var title = props.childrenGroupStats[0].groupStats.groupInfo.type
    if (!title.localeCompare("Family Group")) {
        return (
            <div style={{ padding: "15px" }}>
                <Card>
                    <CardHeader><h5>{title}s</h5></CardHeader>
                    <div style={{ padding: "15px" }}>
                        {
                            props.childrenGroupStats.map((child) =>
                                <div style={textStyle} onClick={() => props.onChildGroupClick(child.groupStats)}>
                                    <li>{child.groupStats.groupInfo.name}</li>
                                </div>
                            )
                        }
                    </div>
                </Card>
                <hr />
            </div>
        );
    }

    return (
        <div style={{ padding: "15px" }}>
            <Card>
                <CardHeader><h5>{title}s</h5></CardHeader>
                <div style={{ padding: "15px" }}>
                    {
                        props.childrenGroupStats.map((child) =>
                            <div style={textStyle} onClick={() => props.onChildGroupClick(child.groupStats.groupInfo.id)}>
                                <li>{child.groupStats.groupInfo.name}</li>
                            </div>
                        )
                    }
                </div>
            </Card>
            <hr />
        </div>
    );
}

export default Children;