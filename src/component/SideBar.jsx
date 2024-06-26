
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // early return pattern
  if (!isMenuOpen) return null;
  return  (
    <div className="">
      <div className="p-5 shadow-md w-48">
        <ul>
          <Link to={"/"}><li>Home</li></Link>
          <li>Shorts</li>
          <li>Video</li>
          <li>Live</li>
        </ul>
        <h1 className="font-bold pt-4">Watch Latter</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-4">Watch Latter</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
