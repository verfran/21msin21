import React from 'react';
import { BeatLoader } from 'react-spinners'

const loadingIconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px",
}

const Loader = (props) => {
    return (
        <div style={loadingIconStyle}>
            <BeatLoader size={25} color='#003366' />
        </div>
    );
}

export default Loader;