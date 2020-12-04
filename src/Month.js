import React from 'react';
import ScriptureCard from './ScriptureCard';
import ApplicationCard from './ApplicationCard';

const Month = (props) => {

    return (
        <div>
            <h3>{props.monthData.name}</h3>
            {
                props.monthData.scriptures.map((scripture) =>
                    <ScriptureCard scripture={scripture} />
                )
            }
            <hr />
            <ApplicationCard application={props.monthData.application} />
            <hr />
        </div>

    );
}

export default Month;