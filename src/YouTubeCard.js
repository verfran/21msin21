import React from 'react';
import YouTube from 'react-youtube';

const YouTubeCard = (props) => {
    const onVideoReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    const opts = {
        height: '200',
        width: '300',
        playerVars: {
        },
    };

    return (
        <div style={{ padding: "20px" }}>
            <center>
                <YouTube videoId={props.videoID} opts={opts} onReady={onVideoReady} />
            </center>
        </div>
    );

}

export default YouTubeCard;