import React from 'react';
import ScriptureCard from './ScriptureCard';

const Month = (props) => {

    return (
        <div>
            <center>
                <br />
                <h3>{props.monthData.name}</h3>
                <br />
            </center>
            {
                props.monthData.scriptures.map((scripture) =>
                    <ScriptureCard key={scripture.id} scripture={scripture} />
                )
            }
        </div>

    );
}

export default Month;