import React from "react";
import ReactPlayer from "react-player";

import "./VideoBox.css";

const VideoBox = ({ item }) => {
  return (
    <div className="video-wrapper">
      <ReactPlayer controls className="react-player" width="100%" height="100%" url={item.videoURL} />
    </div>
  );
};

export default VideoBox;
