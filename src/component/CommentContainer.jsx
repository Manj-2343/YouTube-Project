import React from "react";
import SingleComment from "./SingleComment";
import { CommentList } from "./SingleComment";

export const commentsData = [
  {
    name: "Manoj Biswal",
    text: "Lorem ipsum dolor sit amet, consectet",
    replies: [],
  },
  {
    name: "Manoj Biswal",
    text: "Lorem ipsum dolor sit amet, consectet",
    replies: [
      {
        name: "Manoj Biswal",
        text: "Lorem ipsum dolor sit amet, consectet",
        replies: [
          {
            name: "Manoj Biswal",
            text: "Lorem ipsum dolor sit amet, consectet",
            replies: [
              {
                name: "Manoj Biswal",
                text: "Lorem ipsum dolor sit amet, consectet",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Manoj Biswal",
        text: "Lorem ipsum dolor sit amet, consectet",
        replies: [
          {
            name: "Manoj Biswal",
            text: "Lorem ipsum dolor sit amet, consectet",
            replies: [
              {
                name: "Manoj Biswal",
                text: "Lorem ipsum dolor sit amet, consectet",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Manoj Biswal",
        text: "Lorem ipsum dolor sit amet, consectet",
        replies: [
          {
            name: "Manoj Biswal",
            text: "Lorem ipsum dolor sit amet, consectet",
            replies: [],
          },
          {
            name: "Manoj Biswal",
            text: "Lorem ipsum dolor sit amet, consectet",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Manoj Biswal",
    text: "Lorem ipsum dolor sit amet, consectet",
    replies: [
      {
        name: "Manoj Biswal",
        text: "Lorem ipsum dolor sit amet, consectet",
        replies: [],
      },
      {
        name: "Manoj Biswal",
        text: "Lorem ipsum dolor sit amet, consectet",
        replies: [],
      },
      {
        name: "Manoj Biswal",
        text: "Lorem ipsum dolor sit amet, consectet",
        replies: [],
      },
    ],
  },
  {
    name: "Manoj Biswal",
    text: "Lorem ipsum dolor sit amet, consectet",
    replies: [
      {
        name: "Manoj Biswal",
        text: "Lorem ipsum dolor sit amet, consectet",
        replies: [],
      },
      {
        name: "Manoj Biswal",
        text: "Lorem ipsum dolor sit amet, consectet",
        replies: [],
      },
      {
        name: "Manoj Biswal",
        text: "Lorem ipsum dolor sit amet, consectet",
        replies: [],
      },
    ],
  },
];

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
