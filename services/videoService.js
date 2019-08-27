import axios from "axios";
import * as helpers from "./serviceHelper";

const endpointPrefix = "https://www.googleapis.com/youtube/v3/search";

const apiKey = helpers.YOUTUBE_API_KEY;

let getVideos = query => {
  const config = {
    method: "GET",
    url:
      endpointPrefix +
      `?part=snippet&type=video&q=${query}&maxResults=6&key=${apiKey}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config).then(helpers.onGlobalSuccess);
};

export default { getVideos };
