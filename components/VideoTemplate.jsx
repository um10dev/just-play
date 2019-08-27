import React from "react";

function VideoTemplate(props) {
  return (
    <div className="col-xl-6 col-md-6 col-sm-12 video-template">
      <div className="commentBorder">
        <h6>{props.video.snippet.title}</h6>
        <iframe
          className="theVideo"
          src={"//www.youtube.com/embed/" + props.video.id.videoId}
          alt={props.video.snippet.description}
          allowFullScreen
          title={props.video.snippet.title}
        />
      </div>
    </div>
  );
}

export default VideoTemplate;
