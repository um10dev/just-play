import React, { Component } from "react";
import VideoTemplate from "./VideoTemplate";
import videoService from "../services/videoService";

class Videos extends Component {
  state = {
    query: {
      text: ""
    },
    videos: []
  };

  handleChange = e => {
    let value = e.target.value;
    this.setState(() => {
      return {
        query: { text: value }
      };
    });
  };

  searchYoutube = async () => {
    const response = await videoService.getVideos(this.state.query.text);
    this.setState(() => {
      return {
        videos: response.items.map(this.mapComments),
        query: { text: "" }
      };
    });
  };

  mapComments = (video, index) => <VideoTemplate video={video} key={index} />;

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Search for Musical Styles I'm Interested In</h2>
            <hr />
          </div>
          <div className="col-md-12 mb-5">
            <div className="form-inline search-input">
              <input
                type="text"
                name="query"
                placeholder="Search..."
                className="form-control search-input"
                value={this.state.query.text}
                onChange={this.handleChange}
              />
              <button className="btn btn-info" onClick={this.searchYoutube}>
                Search
              </button>
            </div>
            <div className="row">{this.state.videos}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Videos;
