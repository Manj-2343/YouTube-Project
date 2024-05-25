import { truncateTitle } from "../utils/helperFunction";
import { Link } from "react-router-dom";

const VideoCard = ({ info, imageSrc,children }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const truncatedTitle = truncateTitle(title, 35);
  return (
    <div className="p-2 m-2 w-60 h-72 shadow-lg">
      <img
        className="rounded-lg"
        src={imageSrc || thumbnails.medium.url}
        alt="Thumbnail"
      />
      {children || (
        <ul>
          <li className="font-bold py-3">{truncatedTitle}</li>
          <li>{snippet.channelTitle}</li>
          <li className="font-bold">
            {info.statistics.viewCount} <span className="text-red-500">Views</span>
          </li>
        </ul>
      )}
    </div>
  );
};
export const AdVideoCard = ({ info }) => {
  const adImageSrc = "https://i.ytimg.com/vi/WoigUUGa6ZI/maxresdefault.jpg";
  return (
    <div>
      <VideoCard info={info} imageSrc={adImageSrc}>
        <div className="flex flex-col items-center justify-center ">
            <p className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis reprehenderit earum unde est.</p>
          <Link to={"/watch"}>
          <button className="bg-green-300 text-red-600 py-2 px-10 rounded-2xl font-bold">
            Visit The Website
          </button>
          </Link>
        </div>
      </VideoCard>
    </div>
  );
};
export default VideoCard;
