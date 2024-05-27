import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helperFunction";

const LiveChart = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //Api Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(30) + "💔",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 py-3 px-2 border border-black rounded-xl w-full h-[500px] bg-gray-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage &&
            chatMessage.map((chatMsg, i) => {
              return (
                <div key={i + 1}>
                  <ChatMessage name={chatMsg.name} message={chatMsg.message} />
                </div>
              );
            })}
        </div>
      </div>
      <form
        className="flex items-center m-3 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Manoj Bswal",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none   focus:border-transparent"
          placeholder="Enter text here"
          value={liveMessage}
          onChange={(event) => setLiveMessage(event.target.value)}
        />
        <button className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-red-600 focus:outline-none">
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChart;
