import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [vidoes, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {vidoes[0] && <AdVideoCard info={vidoes[0]} />}
      {vidoes.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
