import React from 'react';
import Month from './Month.js';

const Months = (props) => {

    return (
        <div>
            {
                props.months.map((month) =>
                    <Month key={month.name} month={month} edit={props.edit} onScriptureClick={props.onScriptureClick}/>
                )
            }
        </div>
    );
}

export default Months;