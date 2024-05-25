import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  //applying the debouncing concept
  useEffect(() => {
    //make an api call  after every key press
    //but if the difference between  the two api call is < 200ms
    //decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json);
    //update the cache
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md">
      {/* <pre>{JSON.stringify(searchQuery)}</pre> */}
      <div className="flex col-span-1 gap-5">
        <img
          src="https://up.yimg.com/ib/th?id=OIP.3oWC_8moLxKDTYSSdd_ELAHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123"
          alt="menu"
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="Logo"
            className="h-8"
          />
        </a>
      </div>
      <div className="col-span-10 text-center">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-300 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed  bg-white px-5 py-2.5 w-[33rem] mx-60 rounded-xl shadow-md border border-gray-200">
            <ul className="text-left">
              {suggestions.map((sug, i) => (
                <li
                  key={i + 1}
                  className="px-2 py-0.5 font-semibold text-gray-500 hover:bg-gray-100 rounded-xl "
                >
                  🔍 {sug}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          src="https://up.yimg.com/ib/th?id=OIP.k7dE2dftQijg3KbpTyIObAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
          alt="userIcon"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
