import React from "react";

const SingleComment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 hover:bg-gray-200 rounded-2xl my-1">
      <img
        src="https://up.yimg.com/ib/th?id=OIP.k7dE2dftQijg3KbpTyIObAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
        alt="comment image"
        className="w-8 h-8 rounded-full"
      />
      <div className="px-3">
        <p className="font-semibold">{name} : </p>
        <p className="font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default SingleComment;

export const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, i) => {
        return (
          <div key={i + 1}>
            <SingleComment data={comment} />
            <div className="pl-5 border border-l-black ml-10">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
