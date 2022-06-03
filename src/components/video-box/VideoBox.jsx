import React from "react";

import "./VideoBox.css";

const VideoBox = ({item}) => {
    return (
        <iframe
            src={item.videoURL}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
    );
};

export default VideoBox;